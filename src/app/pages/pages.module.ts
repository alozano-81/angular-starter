import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GestionLoginComponent } from './gestion-login/gestion-login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
@NgModule({
  declarations: [

    PagesComponent,
    GestionLoginComponent
  ],
  imports: [
    CommonModule,
    //ComponentsModule,
    PagesRoutingModule,
    HttpClientModule,
    //DataTablesModule,
  ],
  exports: [],
})
export class PagesModule {}
