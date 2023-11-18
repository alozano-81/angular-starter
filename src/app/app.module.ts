import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    PagesModule,
    BrowserAnimationsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [appRoutingProviders,
    { provide : APP_BASE_HREF, useValue: '/gestion'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
