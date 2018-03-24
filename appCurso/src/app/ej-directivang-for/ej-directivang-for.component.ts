import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directivang-for',
  templateUrl: './ej-directivang-for.component.html',
  styleUrls: ['./ej-directivang-for.component.css']
})
export class EjDirectivangForComponent implements OnInit {
  cursos: string[];
  estudiantes: any = [
    {id: 1, nombre: 'Isaac', sexo: 'M'},
    {id: 2, nombre: 'Juan'},
    {id: 3, nombre: 'Carmen', sexo: ''}
  ];

  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS'];
  }

  ngOnInit() {
  }

}
