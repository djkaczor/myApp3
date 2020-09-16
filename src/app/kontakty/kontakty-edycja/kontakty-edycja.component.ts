import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Adres } from 'src/app/interface/adres';
import { Kontakt } from 'src/app/interface/kontakt';
import { KontaktyService } from 'src/app/service/kontakty.service';

@Component({
  selector: 'app-kontakty-edycja',
  templateUrl: './kontakty-edycja.component.html',
  styleUrls: ['./kontakty-edycja.component.scss']
})
export class KontaktyEdycjaComponent implements OnInit {

  @Input() kontakt: Kontakt;



  isChecked: boolean;

  typAdres = 'Adres zamieszkania';
  typAdresDoKorespondencji = 'Adres do korespondencji';

  id: string;

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

  constructor(private k: KontaktyService, private router: Router) { }

  ngOnInit(): void {

    // this.kontakt = this.k.kontakt;

    this.id = this.kontakt.id;

    // Dane klienta
    this.imie = this.kontakt.imie;
    this.nazwisko = this.kontakt.nazwisko;

    // Adres
    // this.ul = this.kontakt.adres[0].ul;
    // this.nrLokalu = this.kontakt.adres[0].nrLokalu;
    // this.kodPocztowy = this.kontakt.adres[0].kodPocztowy;
    // this.miasto = this.kontakt.adres[0].miasto;

    // this.ul2 = this.kontakt.adres[1].ul;
    // this.nrLokalu2 = this.kontakt.adres[1].nrLokalu;
    // this.kodPocztowy2 = this.kontakt.adres[1].kodPocztowy;
    // this.miasto2 = this.kontakt.adres[1].miasto;

    // Telefon
    this.tel = this.kontakt.tel;
    // E-mail
    this.email = this.kontakt.email;

  }

  Checked() {
    this.isChecked = !this.isChecked;
  }


  edit() {
    this.dodajAdres();


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
      this.adres2 = {
        typAdres: this.typAdresDoKorespondencji,
        ul: this.ul,
        nrLokalu: this.nrLokalu,
        kodPocztowy: this.kodPocztowy,
        miasto: this.miasto
      };

      //this.adres2 = this.adres1;
    }

    this.adres.push(this.adres1, this.adres2);

  }
}
