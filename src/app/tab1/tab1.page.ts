import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit{

  chat:  any[] = [
    { 
      username: 'Papá',
      message: 'Ya llegue estoy con tu abuelita',
      date: '9:00',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { 
      username: 'Mamá',
      message: 'Ya vienes?',
      date: '3:30',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { 
      username: 'Joss',
      message: 'Me apartas lugar en el camión',
      date: '1:45',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { username: 'Yami',
      message: 'Hola, hay tarea para mañana?',
      date: '11:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    { 
      username: 'Nay',
      message: 'Hola, ¿cómo te va en la universidad?',
      date: '7:00', 
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { 
      username: 'Familia',
      message: 'Sam: el Domingo vienen a desayunar con nosotros',
      date: '6:00',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { username: 'Samuel Hermano',
      message: 'Me avisan cuando ya estén afuera de la casa',
      date: '7:30', 
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' 
    },
    { username: 'Abuelita <3',
      message: '¿Cómo estás?',
      date: '4:00',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg' 
    }
  ];
  

  constructor() {}

  ngOnInit() {

}

}