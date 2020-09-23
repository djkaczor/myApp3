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
  temp: number;
  newID: string;

  kontakty: Kontakt[] = [];

  // Kontakt
  kontakt: Kontakt = {
    nrKlienta: null,
    imie: '',
    nazwisko: '',
    tel: null,
    email: '',
    faktury: 0,
    status: false
  };

  // Adres 1
  adres1: Adres = {
    aid: 1,
    typAdres: 'Adres zamieszkania',
    ul: '',
    nrLokalu: '',
    kodPocztowy: null,
    miasto: '',
  };

  // Adres 2
  adres2: Adres = {
    aid: 2,
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
    this.k.afs.collection('kontakty').valueChanges().subscribe(v => {
      this.kontakty = v;
      this.nrK = v.length;
    });

  }

  add() {

    this.temp = 0;
    for (let i = 0; i < this.nrK; i++) {
      if (this.temp < this.kontakty[i].nrKlienta) {
        this.temp = this.kontakty[i].nrKlienta;
        console.log(this.temp);
      }
    }

    this.newID = this.k.afs.createId();
    this.kontakt.nrKlienta = this.temp + 1;

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
      this.adres1.aid = 2;
      this.k.dodajAdres(id, this.adres1);
    }


  }

  Checked() {
    this.isChecked = !this.isChecked;

  }
}
