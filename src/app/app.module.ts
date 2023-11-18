import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    appRoutingProviders,
    { provide : APP_BASE_HREF, useValue: '/gestion'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
