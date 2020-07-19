import { Injectable } from '@angular/core';
import { Magazyn } from '../interface/magazyn';
import { Kategorie } from '../interface/kategorie';

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

  private magazyn: Magazyn[] = [
    {
      nrProduktu: 3001,
      kategoria: {
        kG: 'Płyty',
        kP: 'Wiórowe'
      },
      nazwaProduktu: 'PŁYTA MEBLOWA BRZOZA OJCÓW CIEMNA 18MM',
      opis: 'grubość - 18 mm (M), wymiary - 2800 x 2100 mm, struktura: - LN - Nordic Wood (Linea)',
      cenaZakupuNetto: 202.66,
      cenaZakupuBrutto: 225.66,
      ilosc: 5,
      jednostka: 'sztuk'
    },
    {
      nrProduktu: 3002,
      kategoria: {
        kG: 'Płyty',
        kP: 'Wiórowe'
      },
      nazwaProduktu: 'PŁYTA MEBLOWA ŚWIERK ALPEJSKI 18MM',
      opis: 'grubość - 18 mm (M), wymiary - 2800 x 2100 mm, struktura: - MO (Montana)',
      cenaZakupuNetto: 202.66,
      cenaZakupuBrutto: 225.66,
      ilosc: 5,
      jednostka: 'sztuk'
    },
    {
      nrProduktu: 16381,
      kategoria: {
        kG: 'Wkręty',
        kP: 'do drewna'
      },
      nazwaProduktu: 'Wkręty 6x80',
      opis: 'Wkręty do płyt wiórowych',
      cenaZakupuNetto: 49,
      cenaZakupuBrutto: 60.27,
      ilosc: 1000,
      jednostka: 'sztuk'
    },
    {
      nrProduktu: 16382,
      kategoria: {
        kG: 'Wkręty',
        kP: 'do metalu'
      },
      nazwaProduktu: 'Wkręty 6x100',
      opis: 'Wkręty do płyt wiórowych',
      cenaZakupuNetto: 54,
      cenaZakupuBrutto: 66.42,
      ilosc: 1000,
      jednostka: 'sztuk'
    }
  ];

  constructor() { }

  pobierzKategorie() {
    return this.kategorie;
  }

  pobierzMagazyn() {
    return this.magazyn;
  }
}
