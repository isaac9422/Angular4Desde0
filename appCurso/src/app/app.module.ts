import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { EjmInterpolacionComponent } from './ejm-interpolacion/ejm-interpolacion.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjDirectivangIfComponent } from './ej-directivang-if/ej-directivang-if.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    EjmInterpolacionComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjDirectivangIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
