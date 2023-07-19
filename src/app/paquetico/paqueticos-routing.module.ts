import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProveedorPaqueticoComponent } from "./proveedor-paquetico/proveedor-paquetico.component"
import { PlanesPaqueticoComponent } from "./planes-paquetico/planes-paquetico.component"

const routes: Routes = [
    { path: 'Proveedores', component: ProveedorPaqueticoComponent },
    { path: 'PlanesPaquetico', component: PlanesPaqueticoComponent }
]
@NgModule({
 imports: [
    RouterModule.forChild( routes )
 ],
 exports: [
    RouterModule
 ],
})
export class PaqueticosRoutingModule {}