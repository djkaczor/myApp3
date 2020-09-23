import { NumberValueAccessor } from '@angular/forms';
import { Adres } from './adres';

export interface Kontakt {
  id?: string;
  nrKlienta?: number;
  imie?: string;
  nazwisko?: string;
  tel?: number;
  email?: string;
  faktury?: number;
  status?: boolean;
}
