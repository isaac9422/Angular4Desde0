import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ej-directivang-class',
  templateUrl: './ej-directivang-class.component.html',
  styleUrls: ['./ej-directivang-class.component.css']
})
export class EjDirectivangClassComponent implements OnInit {
  puntuacion: number;
  constructor() {}

  ngOnInit() {}

  getPuntuacion() {
    // return this.puntuacion;
  }

}
