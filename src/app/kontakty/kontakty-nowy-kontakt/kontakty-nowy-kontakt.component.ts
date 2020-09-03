import { Component, OnInit } from '@angular/core';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { RouterLink, Router } from '@angular/router';

import { Adres } from 'src/app/interface/adres';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-kontakty-nowy-kontakt',
  templateUrl: './kontakty-nowy-kontakt.component.html',
  styleUrls: ['./kontakty-nowy-kontakt.component.scss']
})
export class KontaktyNowyKontaktComponent implements OnInit {


  isChecked = false;
  typAdres = 'Adres zamieszkania';
  typAdresDoKorespondencji = 'Adres do korespondencji';
  _id: number;
  id: number;

  // Dane klienta
  imie: string;
  nazwisko: string;

  // Adres
  ul: string;
  nrLokalu: string;
  kodPocztowy: number;
  miasto: string;
  adres1: Adres;

  ul2: string;
  nrLokalu2: string;
  kodPocztowy2: number;
  miasto2: string;
  adres2: Adres;
  adres: Adres[] = [];

  // Telefon
  tel: number;
  // E-mail
  email: string;

  constructor(
    private k: KontaktyService,
    private router: Router
  ) { }

  ngOnInit() {
    // this._id = this.k.ostatniKontakt();
  }

  add() {
    this.dodajAdres();
    this.k.dodajKontakt({
      id: this._id + 1,
      imie: this.imie,
      nazwisko: this.nazwisko,
      adres: this.adres,
      tel: this.tel,
      email: this.email
    });

    // this.router.navigate(['']);
    this.router.navigate(['/kontakty'])
      .then(() => {
        window.location.reload();
      });

  }

  dodajAdres() {
    this.adres1 = { typAdres: this.typAdres, ul: this.ul, nrLokalu: this.nrLokalu, kodPocztowy: this.kodPocztowy, miasto: this.miasto };
    if (this.isChecked === true) {

      this.adres2 = {
        typAdres: this.typAdresDoKorespondencji,
        ul: this.ul2,
        nrLokalu: this.nrLokalu2,
        kodPocztowy: this.kodPocztowy2,
        miasto: this.miasto2
      };
    }

    else {
      // this.adres2 = {
      //   typAdres: this.typAdresDoKorespondencji,
      //   ul: this.ul,
      //   nrLokalu: this.nrLokalu,
      //   kodPocztowy: this.kodPocztowy,
      //   miasto: this.miasto
      // };

      this.adres2 = this.adres1;
    }

    this.adres.push(this.adres1, this.adres2);

  }

  Checked() {
    this.isChecked = !this.isChecked;

  }
}
