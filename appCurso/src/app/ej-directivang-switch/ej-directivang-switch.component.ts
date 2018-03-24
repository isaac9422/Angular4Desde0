import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directivang-switch',
  templateUrl: './ej-directivang-switch.component.html',
  styleUrls: ['./ej-directivang-switch.component.css']
})
export class EjDirectivangSwitchComponent implements OnInit {
  jugadores: any[] = [
    {nombre: 'Kareem Abdul-Jabbar', equipo: 'LA Lakers'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    {nombre: 'Magic Earvin Johnson', equipo: 'LA Lakers'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
