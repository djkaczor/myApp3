import { Kategoria} from './kategorie';

export interface Magazyn {
    [x: string]: any;
    nrProduktu?: number;
    kategoria?: Kategoria;
    nazwaProduktu?: string;
    opis?: string;
    cenaZakupuNetto?: number;
    cenaZakupuBrutto?: number;
    ilosc?: number;
    jednostka?: string;
}

