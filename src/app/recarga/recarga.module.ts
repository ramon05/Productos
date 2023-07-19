import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorRecargaComponent } from './proveedor-recarga/proveedor-recarga.component';
import { ListProveedoresRecargaComponent } from './components/list-proveedores-recarga/list-proveedores-recarga.component';
import { RecargasRoutingModule } from './recarga-routing.module';
import { BalanceComponent } from './balance/balance.component';
import { VentaRecargaComponent } from './venta-recarga/venta-recarga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';



@NgModule({
  declarations: [
    ProveedorRecargaComponent,
    ListProveedoresRecargaComponent,
    BalanceComponent,
    VentaRecargaComponent,
  ],
  exports: [
    ListProveedoresRecargaComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecargasRoutingModule,
    MaterialModule
  ]
})
export class RecargaModule { }
