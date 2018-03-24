import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ej-directivang-style',
  templateUrl: './ej-directivang-style.component.html',
  styleUrls: ['./ej-directivang-style.component.css']
})
export class EjDirectivangStyleComponent implements OnInit {
  puntuacion = 0;
  constructor() { }

  ngOnInit() {
  }

  setColor() {
    return this.puntuacion > 5 ? 'green' : 'red';
    }

}
