import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-pipe-case',
  templateUrl: './ej-pipe-case.component.html',
  styleUrls: ['./ej-pipe-case.component.css']
})
export class EjPipeCaseComponent implements OnInit {
  upperTexto = 'Texto completamente upper';
  lowerTexto = 'Texto completamente lower';
  constructor() { }

  ngOnInit() {
  }

}
