import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesPage } from './badges.page'; // Importa el componente standalone

const routes: Routes = [
  {
    path: '',
    component: BadgesPage // Usa el componente standalone directamente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesPageRoutingModule {}
