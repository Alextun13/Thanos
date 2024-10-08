import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DbService } from "../services/db.service";

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private dbService: DbService
    ){}

    canActivate() {
        console.log("Ejecutando guardian...")
        const auth = this.dbService.isAuthenticated();
        if(auth) {
            this.router.navigate(['/home'])
        }
        return !auth;
    }
}