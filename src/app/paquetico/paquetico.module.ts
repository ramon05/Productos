import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesPaqueticoComponent } from './planes-paquetico/planes-paquetico.component';
import { ProveedorPaqueticoComponent } from './proveedor-paquetico/proveedor-paquetico.component';
import { CardListProveedorRecargaComponent } from './components/card-list-proveedor-recarga/card-list-proveedor-recarga.component';
import { ListPlanesPaqueticosComponent } from './components/list-planes-paqueticos/list-planes-paqueticos.component';
import { PaqueticosRoutingModule } from './paqueticos-routing.module';
import { MaterialModule } from '../material/material/material.module';



@NgModule({
  declarations: [
    PlanesPaqueticoComponent,
    ProveedorPaqueticoComponent,
    CardListProveedorRecargaComponent,
    ListPlanesPaqueticosComponent
  ],
  exports:[
    ProveedorPaqueticoComponent,
    PlanesPaqueticoComponent
  ],
  
  imports: [
    CommonModule,
    PaqueticosRoutingModule,
    MaterialModule
  ],
})
export class PaqueticoModule { }
