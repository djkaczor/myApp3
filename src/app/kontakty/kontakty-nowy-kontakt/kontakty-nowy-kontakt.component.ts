import { Component, OnInit } from '@angular/core';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { RouterLink, Router } from '@angular/router';
import { Kontakt, Tel, Email } from 'src/app/interface/kontakt';
import { Adres } from 'src/app/interface/adres';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-kontakty-nowy-kontakt',
  templateUrl: './kontakty-nowy-kontakt.component.html',
  styleUrls: ['./kontakty-nowy-kontakt.component.scss']
})
export class KontaktyNowyKontaktComponent implements OnInit {


  _numer = new FormControl('');
  e_mail = new FormControl('');
  _ulica = new FormControl('');
  _miasto = new FormControl('');
  _nrLokalu = new FormControl('');
  _kodPocztowy = new FormControl('');
  _typTel = new FormControl('');
  _typMail = new FormControl('');

  
  _id: number
  id: number
  imie: string
  nazwisko: string
  ul: string
  nrLokalu: string
  kodPocztowy: number
  miasto: string
  adres: Adres[] = []
  typTel: string 
  numer: number
  tel: Tel[] = []
  typMail: string 
  _email: string 
  email: Email[] = []

  constructor(
    private k: KontaktyService,
    private router: Router
   ) { }

  ngOnInit() {
    this._id = this.k.ostatniKontakt();
    // let last: any = this._id[this._id.length - 1];
    console.log(this._id);

  }

  add() {
    
    

      this.dodajKolejnyAdres();
      this.dodajKolejnyTelefon();
      this.dodajKolejnyEmail();

      this.k.dodajKontakt({
        id: this._id + 1,
        imie: this.imie,
        nazwisko: this.nazwisko,
        adres: this.adres,
        tel: this.tel,
        email: this.email
        
      });
      console.log("index = " + this._id);
      this.router.navigate(['/kontakty']);
    

     
    
  }

  dodajKolejnyAdres() {

    this.adres.push({ul: this.ul, nrLokalu: this.nrLokalu, kodPocztowy: this.kodPocztowy, miasto: this.miasto});
    this._ulica.setValue('');
    this._miasto.setValue('');
    this._nrLokalu.setValue('');
    this._kodPocztowy.setValue('');

    


  }

  dodajKolejnyTelefon() {
 
    this.tel.push({typTel: this.typTel, numer: this.numer});
    this._numer.setValue('');
    this._typTel.setValue('');
    
  }

  dodajKolejnyEmail() {

    this.email.push({typMail: this.typMail, _email: this._email});
    this.e_mail.setValue('');
    this._typMail.setValue('');
  }

}
