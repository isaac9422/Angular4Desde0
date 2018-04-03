import { Injectable } from '@angular/core';
// import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presURL = 'https://appcomprasangulardesdecero.firebaseio.com/presupuesto.json';
  preURL = 'https://appcomprasangulardesdecero.firebaseio.com/presupuesto';

  constructor(private request: HttpClient) { }

  onPostPresupuesto(presupuesto: any) {
    const presupuestoDTO = JSON.stringify(presupuesto);
    //    const headers = new Headers({
    //      "Content-Type": 'application/json'
    //    });

    return this.request.post(this.presURL, presupuestoDTO);
  }

  getPresupuestos() {
    return this.request.get(this.presURL);
  }

  getPresupuesto(id: string) {
    const url = `${this.preURL}/${id}.json`;
    return this.request.get(url);
  }

  putPresupuesto(presupuesto: any, id: string) {
    const presupuestoDTO = JSON.stringify(presupuesto);
    const url = `${this.preURL}/${id}.json`;
    return this.request.put(url, presupuestoDTO);
  }

  deletePresupuesto(id: string) {
    const url = `${this.preURL}/${id}.json`;
    return this.request.delete(url);
  }
}
