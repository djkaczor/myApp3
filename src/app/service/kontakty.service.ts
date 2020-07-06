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
          typ: 'Domowy',
          numer: 112
        },
        {
          typ: 'Firmowy',
          numer: 1783466
        }
      ],
      email: [
        {
          typ: 'Prywatny',
          email: 'adam...@cos.com'
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
          typ: 'Domowy',
          numer: 2342
        },
        {
          typ: 'Firmowy',
          numer: 312423
        }
      ],
      email: [
        {
          typ: 'Prywatny',
          email: 'wwwddsd...@cos.com'
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

}
