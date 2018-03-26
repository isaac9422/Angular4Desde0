import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-pipe-date',
  templateUrl: './ej-pipe-date.component.html',
  styleUrls: ['./ej-pipe-date.component.css']
})
export class EjPipeDateComponent implements OnInit {

  hoy: any = new Date();
  constructor() {
    setInterval(() => {
      this.hoy = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
