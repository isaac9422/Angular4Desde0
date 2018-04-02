import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedor: any;
  @ViewChild('formpro') formulario: NgForm;
  ciudades: string[] = [
    'Quibdó',
    'Medellin',
    'Cali',
    'Tunja',
    'Nuqui',
    'Bogota',
    'Pasto',
    'Pereira',
    'Bucaramanga'
  ];

  constructor() {
    this.proveedor = {
      nombre: '',
      ciudad: '',
      telefono: null,
      fechaNacimiento: '',
      cp: ''
    };
  }

  onSubmit() {
    this.proveedor.nombre = this.formulario.value.nombre;
    this.proveedor.ciudad = this.formulario.value.ciudad;
    this.proveedor.telefono = this.formulario.value.telefono;
    this.proveedor.fechaNacimiento = this.formulario.value.fechaNacimiento;
    this.proveedor.cp = this.formulario.value.cp;

    this.formulario.reset();
  }

  ngOnInit() {}

}
