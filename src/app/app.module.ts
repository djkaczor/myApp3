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
import { MagazynService} from './service/magazyn.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { KontaktyNowyKontaktComponent } from './kontakty/kontakty-nowy-kontakt/kontakty-nowy-kontakt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MagazynStronaComponent } from './magazyn/magazyn-strona/magazyn-strona.component';
import { MagazynListaComponent } from './magazyn/magazyn-lista/magazyn-lista.component';
import { MagazynDetaleComponent } from './magazyn/magazyn-detale/magazyn-detale.component';
import { MagazynUstawieniaComponent } from './magazyn/magazyn-ustawienia/magazyn-ustawienia.component';
import { MagazynNowyProduktComponent } from './magazyn/magazyn-nowy-produkt/magazyn-nowy-produkt.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';

//import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    KontaktyStronaComponent,
    KontaltyListaComponent,
    KontaktyDetaleComponent,
    MainNavComponent,
    KontaktyNowyKontaktComponent,
    MagazynStronaComponent,
    MagazynListaComponent,
    MagazynDetaleComponent,
    MagazynUstawieniaComponent,
    MagazynNowyProduktComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    KontaktyService,
    MagazynService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
