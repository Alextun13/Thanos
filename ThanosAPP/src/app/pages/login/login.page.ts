import { Component,ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: String;
  password!: String;
  mensaje : string;

  constructor(
    private toastController : ToastController,
    private router : Router,
    private dbService: DbService,
  ) { 
    this.mensaje = "Bienvenido"
  }

  ngOnInit() {
  }

  validarCredenciales() {
    console.log("Ejecutando validacion ...")
    
    const login = this.dbService.findByUsername(this.username);

    if(login === undefined){
      this.generateMessage('Usuario no existe', 'danger');
      return;
    }

    if (
      this.username === login.username &&
      this.password === login.password
    ) {
      this.generateMessage('Login correcto', 'success');
      let extras: NavigationExtras = {
        state: { user: this.username }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.generateMessage('Login fallido', 'danger');
    }
  }
  async generateMessage(message: string, color: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }
}
