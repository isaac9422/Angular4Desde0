import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any = [
    {nombre: 'Juan', ciudad: 'Bello', telefono: 9991111, cp: 28500, fechaNacimiento: '13/05/1979'},
    {nombre: 'Luis', ciudad: 'Medellín', telefono: 234352, cp: 65500, fechaNacimiento: '10/07/1984'},
    {nombre: 'Pedro', ciudad: 'Quibdó', telefono: 547675, cp: 16500, fechaNacimiento: '24/02/1973'},
    {nombre: 'Pablo', ciudad: 'Medellín', telefono: 4587696, cp: 28500, fechaNacimiento: '25/09/1965'}
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }
}
