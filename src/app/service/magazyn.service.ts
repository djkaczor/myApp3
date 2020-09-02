import { Injectable } from '@angular/core';
import { Magazyn } from '../interface/magazyn';
import { Kategorie } from '../interface/kategorie';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MagazynService {

  private kategorie: Kategorie[] = [
    {
      kG: 'Płyty',
      kP: ['Wiórowe', 'Pilśniowe', 'OSB', 'Sklejki', 'Płyty MDF']
    },
    {
      kG: 'Wkręty',
      kP: ['do drewna', 'do metalu', 'do płyt', 'g-k']
    },
    {
      kG: 'Drewno',
      kP: ['Dąd', 'Jesion', 'Świerk']
    }
  ];

  // private magazyn: Magazyn[] = [
  //   {
  //     nrProduktu: 3001,
  //     kategoria: {
  //       kG: 'Płyty',
  //       kP: 'Wiórowe'
  //     },
  //     nazwaProduktu: 'PŁYTA MEBLOWA BRZOZA OJCÓW CIEMNA 18MM',
  //     opis: 'grubość - 18 mm (M), wymiary - 2800 x 2100 mm, struktura: - LN - Nordic Wood (Linea)',
  //     cenaZakupuNetto: 202.66,
  //     cenaZakupuBrutto: 225.66,
  //     ilosc: 5,
  //     jednostka: 'szt'
  //   },
  //   {
  //     nrProduktu: 3002,
  //     kategoria: {
  //       kG: 'Płyty',
  //       kP: 'Wiórowe'
  //     },
  //     nazwaProduktu: 'PŁYTA MEBLOWA ŚWIERK ALPEJSKI 18MM',
  //     opis: 'grubość - 18 mm (M), wymiary - 2800 x 2100 mm, struktura: - MO (Montana)',
  //     cenaZakupuNetto: 202.66,
  //     cenaZakupuBrutto: 225.66,
  //     ilosc: 5,
  //     jednostka: 'szt'
  //   },
  //   {
  //     nrProduktu: 16381,
  //     kategoria: {
  //       kG: 'Wkręty',
  //       kP: 'do drewna'
  //     },
  //     nazwaProduktu: 'Wkręty 6x80',
  //     opis: 'Wkręty do płyt wiórowych',
  //     cenaZakupuNetto: 49,
  //     cenaZakupuBrutto: 60.27,
  //     ilosc: 4,
  //     jednostka: 'opak'
  //   },
  //   {
  //     nrProduktu: 16382,
  //     kategoria: {
  //       kG: 'Wkręty',
  //       kP: 'do metalu'
  //     },
  //     nazwaProduktu: 'Wkręty 6x100',
  //     opis: 'Wkręty do płyt wiórowych',
  //     cenaZakupuNetto: 54,
  //     cenaZakupuBrutto: 66.42,
  //     ilosc: 2,
  //     jednostka: 'opak'
  //   },
  //   {
  //     nrProduktu: 82645827,
  //     kategoria: {
  //       kG: 'Płyty',
  //       kP: 'OSB'
  //     },
  //     nazwaProduktu: 'Płyta OSB-3 22 mm',
  //     opis: 'Płyta budowlana OSB-3 pióro wpust do zastosować budowlanych, posiadająca dobre parametry nośne. Mały format do łatwego samodzielnego montażu',
  //     cenaZakupuNetto: 34.48,
  //     cenaZakupuBrutto: 44.79,
  //     ilosc: 10,
  //     jednostka: 'szt'
  //   },
  //   {
  //     nrProduktu: 82645826,
  //     kategoria: {
  //       kG: 'Płyty',
  //       kP: 'OSB'
  //     },
  //     nazwaProduktu: 'Płyta OSB-3 18 mm',
  //     opis: 'Płyta budowlana OSB-3 pióro wpust do zastosować budowlanych, posiadająca dobre parametry nośne. Mały format do łatwego samodzielnego montażu',
  //     cenaZakupuNetto: 26.60,
  //     cenaZakupuBrutto: 34.55,
  //     ilosc: 10,
  //     jednostka: 'szt'
  //   },
  //   {
  //     nrProduktu: 45529995,
  //     kategoria: {
  //       kG: 'Wkręty',
  //       kP: 'g-k'
  //     },
  //     nazwaProduktu: 'Wkręt 3.5 x 25 mm',
  //     opis: 'Przeznaczenie: Płyta gipsowo-kartonowa, 200szt/opak.',
  //     cenaZakupuNetto: 4.54,
  //     cenaZakupuBrutto: 5.90,
  //     ilosc: 6,
  //     jednostka: 'opak'
  //   }

  // ];

  constructor(private http: HttpClient) { }


  magazynUrl = 'http://localhost:3000';


  pobierzKategorie() {
    return this.kategorie;
  }

  pobierzMagazyn() {
    return this.http.get<Magazyn[]>(this.magazynUrl + '/Magazyn');
  }
}
