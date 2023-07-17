import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { PaqueticoModule } from './paquetico/paquetico.module';
import { RecargaModule } from './recarga/recarga.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaqueticoModule,
    RecargaModule,
    SidebarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }