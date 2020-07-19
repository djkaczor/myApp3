import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktyStronaComponent } from './kontakty/kontakty-strona/kontakty-strona.component';
import { KontaltyListaComponent } from './kontakty/kontalty-lista/kontalty-lista.component';
import { KontaktyNowyKontaktComponent } from './kontakty/kontakty-nowy-kontakt/kontakty-nowy-kontakt.component';
import { MagazynStronaComponent } from './magazyn/magazyn-strona/magazyn-strona.component';
import { MagazynListaComponent } from './magazyn/magazyn-lista/magazyn-lista.component';


const routes: Routes = [
  { path: 'kontakty', component: KontaktyStronaComponent, children: [
    { path: '', component: KontaltyListaComponent },
    { path: 'Dodaj-kontakt', component:KontaktyNowyKontaktComponent }
  ] },

  { path: 'magazyn', component: MagazynStronaComponent, children:[
    { path: '', component: MagazynListaComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
