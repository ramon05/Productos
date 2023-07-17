import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorRecargaComponent } from './proveedor-recarga/proveedor-recarga.component';
import { ListProveedoresRecargaComponent } from './components/list-proveedores-recarga/list-proveedores-recarga.component';
import { RecargasRoutingModule } from './recarga-routing.module';



@NgModule({
  declarations: [
    ProveedorRecargaComponent,
    ListProveedoresRecargaComponent
  ],
  exports: [
    ListProveedoresRecargaComponent
  ],
  imports: [
    CommonModule,
    RecargasRoutingModule
  ]
})
export class RecargaModule { }
