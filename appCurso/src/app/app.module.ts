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
import { EjDirectivangStyleComponent } from './ej-directivang-style/ej-directivang-style.component';
import { EjDirectivangClassComponent } from './ej-directivang-class/ej-directivang-class.component';
import { EjDirectivangForComponent } from './ej-directivang-for/ej-directivang-for.component';
import { EjDirectivangSwitchComponent } from './ej-directivang-switch/ej-directivang-switch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjDirectivangPropiaComponent } from './ej-directivang-propia/ej-directivang-propia.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    EjmInterpolacionComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjDirectivangIfComponent,
    EjDirectivangStyleComponent,
    EjDirectivangClassComponent,
    EjDirectivangForComponent,
    EjDirectivangSwitchComponent,
    MenuitemDirective,
    EjDirectivangPropiaComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
