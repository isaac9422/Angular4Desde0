import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { PresupuestosService } from './servicios/presupuestos.service';
import { ProveedoresService } from './servicios/proveedores.service';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpressComponent } from './presupuestos/addpress/addpress.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'presupuestos', component: PresupuestosComponent},
  {path: 'addProvee', component: AddproveeComponent},
  {path: 'addPres', component: AddpressComponent},
  {path: 'editPres/:id', component: EditpresComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpressComponent,
    PagenotfoundComponent,
    PresupuestosComponent,
    EditpresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    // HttpModule
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
