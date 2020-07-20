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

  magazyn: Magazyn[] = [];
  doWyslania: Magazyn[] = [];
  doWyslaniaTemp: Magazyn[] = [];
  kategorie: Kategorie[] = [];
  ilosc: number[] = [];
  isShow: boolean[] = [];
  podKat: boolean[] = [];
  i: number;
  temp: number;
  x: number;
  xKat: number;
  zmienna: string;


  constructor(private k: MagazynService) { }

  ngOnInit(): void {
    this.kategorie = this.k.pobierzKategorie();
    this.magazyn = this.k.pobierzMagazyn();
    this.i = 0;
    while (this.i <= this.kategorie.length - 1) {
      this.isShow.push(false);
      this.i++;
    }
  }

  pobieranieIlosci(i) {

    this.temp = 0;
    this.x = this.kategorie[i].kP.length - 1;
    this.ilosc = [];
    while (this.temp <= this.x) {
      this.zmienna = this.kategorie[i].kP[this.temp];
      this.doWyslaniaTemp = this.magazyn.filter(e => e.kategoria.kP.includes(this.zmienna));
      this.ilosc.push(this.doWyslaniaTemp.length);
      this.temp++;
    }
  }

  detale(kp: string) {
    this.doWyslania = this.magazyn.filter(e => e.kategoria.kP.includes(kp));

  }

  zmianaAktywnosci(i: number, k: number) {
    this.temp = 0;
    this.xKat = this.kategorie[i].kP.length - 1;
    while (this.temp < k) {
      if (this.podKat[this.temp] === true) {
        this.podKat[this.temp] = !this.podKat[this.temp];
      }
      this.temp++;
    }
    if (this.temp === k) {
      this.podKat[k] = !this.podKat[k];
      this.temp++;
    }
    while (this.temp <= this.xKat) {
      if (this.podKat[this.temp] === true) {
        this.podKat[this.temp] = !this.podKat[this.temp];
      }
      this.temp++;
    }
  }

  show(i: number) {
    this.temp = 0;
    this.x = this.kategorie.length - 1;
    while (this.temp < i) {
      if (this.isShow[this.temp] === true) {
        this.isShow[this.temp] = !this.isShow[this.temp];
      }
      this.temp++;
    }
    if (this.temp === i) {
      this.isShow[i] = !this.isShow[i];
      this.temp++;
    }
    while (this.temp <= this.x) {
      if (this.isShow[this.temp] === true) {
        this.isShow[this.temp] = !this.isShow[this.temp];
      }
      this.temp++;
    }
    this.temp = 0;
    this.x = this.kategorie[i].kP.length - 1;
    while (this.temp <= this.x) {
      if (this.podKat[this.temp] === true) {
        this.podKat[this.temp] = !this.podKat[this.temp]
      }
      this.temp++;
    }

  }

}
