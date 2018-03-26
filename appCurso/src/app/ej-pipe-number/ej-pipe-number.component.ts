import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-pipe-number',
  templateUrl: './ej-pipe-number.component.html',
  styleUrls: ['./ej-pipe-number.component.css']
})
export class EjPipeNumberComponent implements OnInit {

  pi = Math.PI * 10;
  constructor() { }

  ngOnInit() {
  }

}
