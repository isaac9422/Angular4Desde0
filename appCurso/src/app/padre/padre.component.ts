import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  valores: any[] = [
    'Valor 1',
    'Valor 2',
    'Valor 3'
  ];

  texto: string;
  constructor() { }

  ngOnInit() {
  }

  mostrarMensaje(event) {
    this.texto = event + ' marcado como leído';
  }

}
