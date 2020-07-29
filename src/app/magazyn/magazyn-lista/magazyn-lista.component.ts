import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Magazyn } from 'src/app/interface/magazyn';
import { MagazynService } from 'src/app/service/magazyn.service';
import { Kategorie } from 'src/app/interface/kategorie';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { FormControl } from '@angular/forms';

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

  szukaj = new FormControl('');

  szukanyText: string;
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
  all: string;
  brakProduktow: boolean;

  tempIsShow: number;
  tempKat: number;



  constructor(private k: MagazynService) { }

  ngOnInit(): void {
    this.all = 'Wszystkie';
    this.kategorie = this.k.pobierzKategorie();
    this.magazyn = this.k.pobierzMagazyn();
    this.i = 0;
    while (this.i <= this.kategorie.length - 1) {
      this.isShow.push(false);
      this.i++;
    }

    this.tempIsShow = -1;
    this.tempKat = -1;
  }

  sprawdzanie() {
    if (this.doWyslania.length === 0) {
      this.brakProduktow = true;
    } else {
      this.brakProduktow = false;
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

  detaleKP(kp: string) {
    this.doWyslania = this.magazyn.filter(e => e.kategoria.kP.includes(kp));
    this.sprawdzanie();
  }

  detaleKG(kg: string) {

    this.doWyslania = this.magazyn.filter(e => e.kategoria.kG.includes(kg));
    this.sprawdzanie();
  }

  szukaneDetale(value: string) {

    this.doWyslania = this.magazyn.filter(e => e.nazwaProduktu.toLowerCase === value.toLowerCase);

  }

  zmianaAktywnosci(k: number) {

    if (k !== this.tempKat) {
      this.podKat[k] = true;
      try {
        this.podKat[this.tempKat] = false;
      } catch {}
    }

    if (k === this.tempKat) {
      this.podKat[k] = !this.podKat[k];
    }

    this.tempKat = k;
  }

  show(i: number) {

    if (i !== this.tempIsShow) {
      this.isShow[i] = true;
      try {
        this.isShow[this.tempIsShow] = false;
      } catch { }
    }

    if (i === this.tempIsShow) {
      this.isShow[i] = !this.isShow[i];
    }

    this.tempIsShow = i;
    this.temp = 0;
    this.x = this.kategorie[i].kP.length - 1;
    while (this.temp <= this.x) {

      this.podKat[this.temp] = false;

      this.temp++;
    }

  }

  wszystkie() {
    this.doWyslania = this.magazyn;
    this.temp = 0;
    this.x = this.kategorie.length - 1;
    while (this.temp <= this.x) {
      if (this.isShow[this.temp] === true) {
        this.isShow[this.temp] = !this.isShow[this.temp];
      }
      this.temp++;
    }
    this.sprawdzanie();
  }

  clear() {
    this.szukaj.setValue('');
  }
}
