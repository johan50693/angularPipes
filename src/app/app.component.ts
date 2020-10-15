import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre ='Capitana Marvel';
  nombreCompleto ='AlBeRt UrBiNa';
  array= [1,2,3,4,5,6,7,8,9,10];
  pi= Math.PI;
  porcentaje= 0.643;
  url='https://www.youtube.com/embed/Lcr7Qm9AvOQ';
  salario= 123456789.142;
  fecha= new Date();
  idioma='es';
  promesa= new Promise( (resolve) => {
    setTimeout(()=>{
      resolve('Llego la información');
    },4500);
  });

  Xmen= {
    nombre:'Wolverine',
    poder: 'Recuperación',
    generacion: 1,
    origen:{
      natural: 'Creado',
      laboratorio: true
    }
  }
}
