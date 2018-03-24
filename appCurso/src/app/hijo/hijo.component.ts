import {
  Component,  OnInit,  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() valor = 'Texto creado desde el hijo';
  @Output() mensajeMarcado = new EventEmitter();

  leido = false;
  mensaje: string;

  marcar(event) {
    this.leido = !this.leido;
  }

  detectar(event) {
    this.mensaje = this.valor;
    this.mensajeMarcado.emit(this.mensaje);
  }
  constructor() {}

  ngOnInit() {}

}
