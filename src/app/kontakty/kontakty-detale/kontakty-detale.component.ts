import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { Adres } from 'src/app/interface/adres';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontakty-detale',
  templateUrl: './kontakty-detale.component.html',
  styleUrls: ['./kontakty-detale.component.scss']
})
export class KontaktyDetaleComponent implements OnInit {


  @Input() kontakt: Kontakt;
  @Input() zmiany: boolean;
  @Input() adres: Adres[] = [];
  @Output() zamknijDetale = new EventEmitter<boolean>();
  @Output() otworzEdycje = new EventEmitter<boolean>();




  constructor(private k: KontaktyService, private router: Router) { }

  id: string;
  editStateAdres: boolean = false;
  editStateKontaktImie: boolean = false;
  editStateKontaktTel: boolean = false;
  editStateKontaktEmail: boolean = false;
  adresL: number;

  adresDoEdycji: Adres = {
    aid: 1,
    typAdres: 'Adres zamieszkania',
    ul: '',
    nrLokalu: '',
    kodPocztowy: null,
    miasto: '',
  };

  kontaktDoEdycji: Kontakt = {
    id: null,
    nrKlienta: null,
    imie: '',
    nazwisko: '',
    tel: null,
    email: '',
    faktury: 0,
    status: false

  };

  ngOnInit() {
    this.edycjaKontaktuWstepneUstawienia();
    
  }

  zamknij() {
    this.zmiany = !this.zmiany;
    this.zamknijDetale.emit(this.zmiany);
  }

  edycjaAdres(a: Adres) {
    this.adresDoEdycji.id = a.id;
    this.adresDoEdycji.aid = a.aid;
    this.adresDoEdycji.typAdres = a.typAdres;
    this.adresDoEdycji.ul = a.ul;
    this.adresDoEdycji.nrLokalu = a.nrLokalu;
    this.adresDoEdycji.kodPocztowy = a.kodPocztowy;
    this.adresDoEdycji.miasto = a.miasto;
    this.editStateAdres = true;
  }

  edycjaKontaktuWstepneUstawienia() {
    this.kontaktDoEdycji.id = this.kontakt.id;
    this.kontaktDoEdycji.nrKlienta = this.kontakt.nrKlienta;
    this.kontaktDoEdycji.imie = this.kontakt.imie;
    this.kontaktDoEdycji.nazwisko = this.kontakt.nazwisko;
    this.kontaktDoEdycji.tel = this.kontakt.tel;
    this.kontaktDoEdycji.email = this.kontakt.email;
    this.kontaktDoEdycji.faktury = this.kontakt.faktury;
    this.kontaktDoEdycji.status = this.kontakt.status;
  }

  edytujKontakt() {
    this.edycjaKontaktuWstepneUstawienia();
    this.k.edytujKontaktImie(this.kontakt.id, this.kontaktDoEdycji);
    this.kontakt = this.kontaktDoEdycji;
    this.anulujImie();
  }
  edytujKontaktEmail() {
    this.edycjaKontaktuWstepneUstawienia();
    this.k.edytujKontaktImie(this.kontakt.id, this.kontaktDoEdycji);
    this.kontakt = this.kontaktDoEdycji;
    this.anulujEmail();
  }

  edytujKontaktTel() {
    this.edycjaKontaktuWstepneUstawienia();
    this.k.edytujKontaktImie(this.kontakt.id, this.kontaktDoEdycji);
    this.kontakt = this.kontaktDoEdycji;
    this.anulujTel();
  }

  edytujAdres() {
    this.k.edytujAdres(this.kontakt.id, this.adresDoEdycji.id, this.adresDoEdycji);
    this.anuluj();
  }

  edycjaKontaktImie() {
    this.editStateKontaktImie = true;
  }

  edytujEmail() {
    this.editStateKontaktEmail = true;
  }

  edytujTel() {
    this.editStateKontaktTel = true;
  }

  anuluj() {
    this.editStateAdres = false;
  }

  anulujImie() {
    this.editStateKontaktImie = false;
  }

  anulujEmail() {
    this.editStateKontaktEmail = false;
  }


  anulujTel() {
    this.editStateKontaktTel = false;
  }

  delete() {
    this.adresL = this.adres.length;
    for (let i = 0; i < this.adresL; i++) {
    this.k.skasujAdresy(this.kontakt.id, this.adres[i].id );
}
    this.k.skasujKontakt(this.kontakt.id);
    this.zamknij();
  }
}
