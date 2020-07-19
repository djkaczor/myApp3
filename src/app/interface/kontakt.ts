import { Adres } from './adres';

export interface Kontakt {
  id: number;
  imie?: string;
  nazwisko?: string;
  adres?: Adres[];
  tel?: number;
  email?: string;
}
