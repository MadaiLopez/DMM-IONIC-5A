import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
  standalone:false,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InformacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
