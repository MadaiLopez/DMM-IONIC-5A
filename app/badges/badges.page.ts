import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // Cambia esta línea

@Component({
  standalone: true, // Sigue siendo standalone
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule] // Importa módulos necesarios
})
export class BadgesPage {
  constructor(private router: Router) {
    this.router.navigate(['/tarjetas']); 
  }
}

