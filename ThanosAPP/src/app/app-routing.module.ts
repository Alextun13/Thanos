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
    canActivate : [AuthGuard],
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
