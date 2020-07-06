import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktyStronaComponent } from './kontakty/kontakty-strona/kontakty-strona.component';
import { KontaltyListaComponent } from './kontakty/kontalty-lista/kontalty-lista.component';
import { KontaktyService } from './service/kontakty.service';
import { KontaktyDetaleComponent } from './kontakty/kontakty-detale/kontakty-detale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { KontaktyNowyKontaktComponent } from './kontakty/kontakty-nowy-kontakt/kontakty-nowy-kontakt.component';


@NgModule({
  declarations: [
    AppComponent,
    KontaktyStronaComponent,
    KontaltyListaComponent,
    KontaktyDetaleComponent,
    MainNavComponent,
    KontaktyNowyKontaktComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
  ],
  providers: [KontaktyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
