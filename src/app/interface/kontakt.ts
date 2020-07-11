import { Adres } from './adres';

export interface Kontakt {
  id: number;
  imie?: string;
  nazwisko?: string;
  adres?: Adres[];
  tel?: Tel[];
  email?: Email[];
}

export interface Tel {
  typTel?: string;
  numer?: number;
  }

export interface Email {
    typMail?: string;
    _email?: string;
  }
