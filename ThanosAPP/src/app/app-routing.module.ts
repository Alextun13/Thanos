import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'lector-qr',
    redirectTo: 'lector-qr',
    pathMatch: 'full'
  },
  {
    path: 'registro-qr',
    canActivate : [AuthGuard],
    loadChildren: () => import('./registro-qr/registro-qr.module').then( m => m.RegistroQrPageModule)
  },
 

  {
    path: 'home',
    canActivate : [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate : [NoAuthGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },   {
    path: 'registro',
    canActivate : [NoAuthGuard],
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    
  },

  {
    path: 'e404',
    canActivate : [NoAuthGuard],
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./pages/lector-qr/lector-qr.module').then( m => m.LectorQrPageModule)
  },

  


  // Este path siempre debe ir al final
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
