import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProveedorRecargaComponent } from "./proveedor-recarga/proveedor-recarga.component";
import { BalanceComponent } from "./balance/balance.component";






const routes: Routes = [
    {
        path: 'Proveedores',
        component: ProveedorRecargaComponent
    },
    {
        path: 'Balances',
        component: BalanceComponent
    },
]
@NgModule({
 imports: [
    RouterModule.forChild( routes )
 ],
 exports: [
    RouterModule
 ],
})
export class RecargasRoutingModule {}