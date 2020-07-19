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
          typAdres: 'Adres zamieszkania',
          ul: 'Am',
          nrLokalu: '10',
          kodPocztowy: 26197,
          miasto: 'Hunt'
        },
        {
          typAdres: 'Adres do korespondencji',
          ul: 'Mickiewicza',
          nrLokalu: '6',
          kodPocztowy: 72100,
          miasto: 'Gol'
        }
      ],
      tel: 1783466541777,
      email: 'adam.pacholski1985@gmail.com',
    },
    {
      id: 2,
      imie: 'Kubeł',
      nazwisko: 'P',
      adres: [
        {
          typAdres: 'Adres zamieszkania',
          ul: 'Mickiewicza',
          nrLokalu: '6',
          kodPocztowy: 72100,
          miasto: 'Gol'
        }
      ],
      tel: 7778889990,
      email: 'jcob.costam@gmail.com',
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
    const id: number = this.kontakty[this.kontakty.length - 1].id;
    return id;
  }
}