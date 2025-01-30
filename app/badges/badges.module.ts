import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BadgesPageRoutingModule } from './badges-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgesPageRoutingModule // Las rutas ya manejarán el componente standalone
  ]
})
export class BadgesPageModule {}
