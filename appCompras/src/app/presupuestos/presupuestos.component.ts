import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos().subscribe(
      presupuestos => {
        for (const id$ of Object.keys(presupuestos)) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      }
    );
  }

  ngOnInit() {
  }

  eliminarPresupuesto(id: string) {
    this.presupuestosService.deletePresupuesto(id).subscribe(
      response => {
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos().subscribe(
          presupuestos => {
            for (const id$ of Object.keys(presupuestos)) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.presupuestos.push(presupuestos[id$]);
            }
          }
        );
      }
    );
  }
}
