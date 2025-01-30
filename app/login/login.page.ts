import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private navController: navController;
  ) { }

  ngOnInit() {
  }
  login( form: NgForm ){

    //para inprimir uno por uno, ejemplo: "console.log('email:', this.email);"
    console.log('email:', this.email);
    console.log('password:', this.password);

    //obtener los valores del formulario
    console.log(form.value); //con esta funcion imprime todos

    //validar formulario 
    console.log('valid:', form.valid);



    if(this.email == 'admin'
      && this.password == 'admin'){
        this.navController.navigateFoward('/home');
    }
    else{
      console.log('login incorrecto');
    }

    //5 === '5'
    //si usuario = admin y password =admin
    //Entonces console.log('login correcto')
    // si no console.log('login incorrecto')
  }

}
