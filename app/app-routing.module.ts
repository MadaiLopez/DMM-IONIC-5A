import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //Arreglo
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then((m)  => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule)
  },
 
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then((m)  => m.BadgesPageModule)
  },
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
