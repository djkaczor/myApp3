import { Component, OnInit } from '@angular/core';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { RouterLink, Router } from '@angular/router';

import { Adres } from 'src/app/interface/adres';
import { FormControl } from '@angular/forms';
import { Kontakt } from 'src/app/interface/kontakt';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-kontakty-nowy-kontakt',
  templateUrl: './kontakty-nowy-kontakt.component.html',
  styleUrls: ['./kontakty-nowy-kontakt.component.scss']
})
export class KontaktyNowyKontaktComponent implements OnInit {


  isChecked = false;
  // typAdres = 'Adres zamieszkania';
  // typAdresDoKorespondencji = 'Adres do korespondencji';
  //adres: Adres[] = [];

  nrK: number;
  newID: string;

  // Kontakt
  kontakt: Kontakt = {
    nrKlienta: null,
    imie: '',
    nazwisko: '',
    tel: null,
    email: '',
  };

  // Adres 1
  adres1: Adres = {
    typAdres: 'Adres zamieszkania',
    ul: '',
    nrLokalu: '',
    kodPocztowy: null,
    miasto: '',
  };

  // Adres 2
  adres2: Adres = {
    typAdres: 'Adres do korespondencji',
    ul: '',
    nrLokalu: '',
    kodPocztowy: null,
    miasto: ''
  };

  constructor(
    private k: KontaktyService,
    private router: Router
  ) { }

  ngOnInit() {
    // this._id = this.k.ostatniKontakt();
    this.k.afs.collection('kontakty').valueChanges().subscribe( v => this.nrK = v.length);

  }

  add() {
    this.newID = this.k.afs.createId();
    this.kontakt.nrKlienta = this.nrK + 1;

    this.k.dodajKontakt(this.newID, this.kontakt);
    delay(2000);
    this.addAdres(this.newID);

    this.router.navigate(['/kontakty']);
      // .then(() => {
      //   window.location.reload();
      // });
  }

  addAdres(id: string) {
    id = this.newID;

    this.k.dodajAdres(id, this.adres1);

    if (this.isChecked === true) {
      this.k.dodajAdres(id, this.adres2);
    }

    else {
      this.adres1.typAdres = 'Adres do korespondencji';
      this.k.dodajAdres(id, this.adres1);
    }


  }

  Checked() {
    this.isChecked = !this.isChecked;

  }
}
