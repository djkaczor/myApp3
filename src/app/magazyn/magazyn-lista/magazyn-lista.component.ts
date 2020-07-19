import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Magazyn } from 'src/app/interface/magazyn';
import { MagazynService } from 'src/app/service/magazyn.service';
import { Kategorie } from 'src/app/interface/kategorie';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-magazyn-lista',
  templateUrl: './magazyn-lista.component.html',
  styleUrls: ['./magazyn-lista.component.scss'],
  animations: [
    trigger(
      'in',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 'auto', opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave',
        //   [
        //     style({ height: 300, opacity: 1 }),
        //     animate('1s ease-in',
        //             style({ height: 0, opacity: 0 }))
        //   ]
        // )
      ]
    ),
  ]
})
export class MagazynListaComponent implements OnInit {

  zmienna: string;
  magazyn: Magazyn[] = [];
  doWyslania: Magazyn[] = [];
  kategorie: Kategorie[] = [];
  poka: boolean[] = [];
  i: number;
  temp: number;
  x: number;

  constructor(private k: MagazynService) { }

  ngOnInit(): void {
    this.kategorie = this.k.pobierzKategorie();
    this.magazyn = this.k.pobierzMagazyn();
    this.i = 0;
    while (this.i <= this.kategorie.length - 1) {
      this.poka.push(false);
      this.i++;
    }
    console.log(this.magazyn);
  }

  test(i) {
    this.zmienna = i;
    this.doWyslania = this.magazyn.filter(e => e.kategoria.kP.includes(this.zmienna));
  }

  test2(i) {
    this.temp = 0;
    this.x = this.kategorie.length - 1;
    console.log(this.x);
    while (this.temp <= this.x) {
      if(this.poka[this.temp] === true) {
        this.poka[this.temp] = !this.poka[this.temp];
      }
      this.temp++;
    }
    this.poka[i] = !this.poka[i];
  }

}
