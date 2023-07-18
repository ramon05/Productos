import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorRecargaComponent } from './proveedor-recarga/proveedor-recarga.component';
import { ListProveedoresRecargaComponent } from './components/list-proveedores-recarga/list-proveedores-recarga.component';
import { RecargasRoutingModule } from './recarga-routing.module';
import { BalanceComponent } from './balance/balance.component';



@NgModule({
  declarations: [
    ProveedorRecargaComponent,
    ListProveedoresRecargaComponent,
    BalanceComponent
  ],
  exports: [
    ListProveedoresRecargaComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    RecargasRoutingModule
  ]
})
export class RecargaModule { }
