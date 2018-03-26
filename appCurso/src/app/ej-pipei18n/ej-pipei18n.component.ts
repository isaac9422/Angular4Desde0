import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-pipei18n',
  templateUrl: './ej-pipei18n.component.html',
  styleUrls: ['./ej-pipei18n.component.css']
})
export class EjPipei18nComponent implements OnInit {

  personas: any[] = [
    {nombre: 'Laura', sexo: 'F'},
    {nombre: 'Ana', sexo: 'F'},
    {nombre: 'Juan', sexo: 'M'}
  ];
  encabezado: any = {'M': 'Estimado', 'F': 'Estimada'};
  constructor() { }

  ngOnInit() {
  }

}
