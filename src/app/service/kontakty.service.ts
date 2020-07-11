import { Injectable } from '@angular/core';
import { Kontakt } from '../interface/kontakt';

@Injectable({
  providedIn: 'root'
})
export class KontaktyService {


  private kontakty: Kontakt[] = [
    {
      id: 1,
      imie: 'Adam',
      nazwisko: 'Pa',
      adres: [
        {
          ul: 'Am',
          nrLokalu: '10',
          kodPocztowy: 26197,
          miasto: 'Hunt'
        },
        {
          ul: 'Mickiewicza',
          nrLokalu: '6',
          kodPocztowy: 72100,
          miasto: 'Gol'
        }
      ],
      tel: [
        {
          typTel: 'Domowy',
          numer: 112
        },
        {
          typTel: 'Firmowy',
          numer: 1783466
        }
      ],
      email: [
        {
          typMail: 'Prywatny',
          _email: 'adam...@cos.com'
        }
      ]
    },
    {
      id: 2,
      imie: 'Kubeł',
      nazwisko: 'P',
      adres: [
        {
          ul: 'Mickiewicza',
          nrLokalu: '6',
          kodPocztowy: 72100,
          miasto: 'Gol'
        }
      ],
      tel: [
        {
          typTel: 'Domowy',
          numer: 2342
        },
        {
          typTel: 'Firmowy',
          numer: 312423
        }
      ],
      email: [
        {
          typMail: 'Prywatny',
          _email: 'wwwddsd...@cos.com'
        }
      ]
    }
  ];

  constructor() { }

  pobierzKontakty() {
    return this.kontakty;
  }

  dodajKontakt(kontakt: Kontakt) {
    this.kontakty.push(kontakt);
  }

  ostatniKontakt() {
    let id: number = this.kontakty[this.kontakty.length -1].id;
    return id;
  }

 

}
