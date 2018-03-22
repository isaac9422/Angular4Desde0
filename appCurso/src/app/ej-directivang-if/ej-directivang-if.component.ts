import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-directivang-if',
  templateUrl: './ej-directivang-if.component.html',
  styleUrls: ['./ej-directivang-if.component.css']
})
export class EjDirectivangIfComponent implements OnInit {
    nombre:String;
    capital:String;
  constructor() { }

  ngOnInit() {
  }
    setResultado(){
        return this.capital === "Botota" ? true : false;
}

}
