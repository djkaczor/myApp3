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
  typ?: string;
  numer?: number;
  }

export interface Email {
    typ?: string;
    email?: string;
  }
