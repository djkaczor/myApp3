import { Kategoria} from './kategorie';

export interface Magazyn {
    nrProduktu?: number;
    kategoria?: Kategoria;
    nazwaProduktu?: string;
    opis?: string;
    cenaZakupuNetto?: number;
    cenaZakupuBrutto?: number;
    ilosc?: number;
    jednostka?: string;
}

