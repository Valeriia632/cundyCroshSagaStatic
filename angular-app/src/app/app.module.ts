import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TablaPartidasComponent } from './core/components/tabla-partidas/tabla-partidas.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPartidasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }