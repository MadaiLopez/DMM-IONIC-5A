import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar,IonTitle,IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit () {
    console.log('Majo estas bien?, la primera ondeada de Joss');
    let numero = 0;
    numero = 5;
    numero = 7;
    numero = numero * 2;
    numero = numero/3;

    console.log('La primera ondeada de Joss');
    console.log('Se va el plateado');
    console.log('Berni esta loco');
    console.log('Hola');
  }

}
