import { Injectable } from '@angular/core';
import { Kontakt } from '../interface/kontakt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KontaktyService {

  // private kontakty: Kontakt[] = [
  //   {
  //     id: 1,
  //     imie: 'Adam',
  //     nazwisko: 'Pa',
  //     adres: [
  //       {
  //         typAdres: 'Adres zamieszkania',
  //         ul: 'Am',
  //         nrLokalu: '10',
  //         kodPocztowy: 26197,
  //         miasto: 'Hunt'
  //       },
  //       {
  //         typAdres: 'Adres do korespondencji',
  //         ul: 'Mickiewicza',
  //         nrLokalu: '6',
  //         kodPocztowy: 72100,
  //         miasto: 'Gol'
  //       }
  //     ],
  //     tel: 1783466541777,
  //     email: 'adam.pacholski1985@gmail.com',
  //   },
  //   {
  //     id: 2,
  //     imie: 'Kubeł',
  //     nazwisko: 'P',
  //     adres: [
  //       {
  //         typAdres: 'Adres zamieszkania',
  //         ul: 'Mickiewicza',
  //         nrLokalu: '6',
  //         kodPocztowy: 72100,
  //         miasto: 'Gol'
  //       }
  //     ],
  //     tel: 7778889990,
  //     email: 'jcob.costam@gmail.com',
  //   }
  // ];

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/Kontakty';


  pobierzKontakty() {
    // return this.kontakty;
    return this.http.get<Kontakt[]>(this.url);
  }

  dodajKontakt(kontakt: Kontakt) {
    // this.kontakty.push(kontakt);
    this.http.post(this.url, kontakt).toPromise();

  }

  deleteKontakt(id: number) {
    this.http.delete(this.url + '/' + id).subscribe();
  }


  ostatniKontakt() {
    // const id: number = this.kontakty[this.kontakty.length - 1].id;
    // return id;
  }
}
