import { NgModule } from "@angular/core";
import {   RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'Paqueticos',
        loadChildren: () => import('./paquetico/paquetico.module').then(m => m.PaqueticoModule)
    },
    {
        path: 'Recargas',
        loadChildren: () => import('./recarga/recarga.module').then(m => m.RecargaModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule {}