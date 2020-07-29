import { Pipe, PipeTransform } from '@angular/core';
import { Magazyn } from '../interface/magazyn';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(items: Magazyn[], szukanyText: string, kategorie: string[]): Magazyn[] {
    if (!items) { return []; }
    if (!szukanyText) { return items; }

    szukanyText = szukanyText.toLowerCase();
    szukanyText = szukanyText.toString();

    const filteredItems = [];

    items.forEach(item => {
      kategorie.forEach(filter => {
        if (item[filter] !== null && item[filter].toString().toLowerCase().includes(szukanyText)) {
          filteredItems.push(item);
        }
      });
    });
    return filteredItems;
  }


  // transform(magazyn: Magazyn[], szukane: string): Magazyn[] {
  //   if (!magazyn || !szukane) {
  //     return magazyn;
  //   }

  //   return magazyn.filter(e => e.nazwaProduktu.toLowerCase().indexOf(szukane.toLocaleLowerCase()) !== -1);

  // }

}
