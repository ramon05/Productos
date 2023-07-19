import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesPaqueticoComponent } from './planes-paquetico/planes-paquetico.component';
import { ProveedorPaqueticoComponent } from './proveedor-paquetico/proveedor-paquetico.component';
import { CardListProveedorRecargaComponent } from './components/card-list-proveedor-recarga/card-list-proveedor-recarga.component';
import { ListPlanesPaqueticosComponent } from './components/list-planes-paqueticos/list-planes-paqueticos.component';
import { PaqueticosRoutingModule } from './paqueticos-routing.module';
import { VenderPaqueticoComponent } from './vender-paquetico/vender-paquetico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlanesPaqueticoComponent,
    ProveedorPaqueticoComponent,
    CardListProveedorRecargaComponent,
    ListPlanesPaqueticosComponent,
    VenderPaqueticoComponent,
  ],
  exports:[
    ProveedorPaqueticoComponent,
    PlanesPaqueticoComponent,
    VenderPaqueticoComponent
  ],
  
  imports: [
    CommonModule,
    PaqueticosRoutingModule,
    ReactiveFormsModule,
    
  ]
 
})
export class PaqueticoModule { }
