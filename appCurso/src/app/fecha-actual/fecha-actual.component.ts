import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent {

    hoy: any = new Date();
    constructor(){
        setInterval(()=>{
            this.hoy = new Date();
        },1000)
    }
}
