import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { RequiredValidator } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { Adres } from 'src/app/interface/adres';

@Component({
  selector: 'app-kontalty-lista',
  templateUrl: './kontalty-lista.component.html',
  styleUrls: ['./kontalty-lista.component.scss'],
  animations: [
    trigger(
      'inAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
              style({ height: 300, opacity: 1 }))
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
export class KontaltyListaComponent implements OnInit {

  zmiany: boolean;

  kontakty: Kontakt[] = [];
  adres: Adres[] = [];
  isshow = false;
  kontakt: Kontakt;
  colorA = '#3b5b96';
  destroyed: any;
  uid: string;
  l: number;


  constructor(private ks: KontaktyService) {
    // this.ko.pobierzKontakty().subscribe((response: Kontakt[]) => {
    //   this.kontakty = response;
    // }
    // );
  }

  ngOnInit() {
    this.zmiany = false;
    // this.kontakty = this.k.pobierzKontakty();
    this.getKontakt();
    
    

  }

  aktualizacja(zmiany: boolean) {
    this.zmiany = zmiany;
    this.getKontakt();
  }


  detale(i) {
    this.kontakt = this.kontakty[i];
    this.uid = this.kontakty[i].id.toString();
    this.ks.pobierzAdres(this.uid).subscribe(adres => {
      this.adres = adres;

    });
    this.zmiany = true;
  }

  getAdres(id: number) {
    this.uid = this.kontakty[id].id.toString();
    this.ks.pobierzAdres(this.uid).subscribe(adres => {
      this.adres = adres;

    });
  }


  getKontakt() {
    // this.ks.pobierzKontakty().subscribe((response: Kontakt[]) => {
    //   this.kontakty = response;
    // }
    // );


    this.ks.pobierzKontakty().subscribe(kontakty => {
      this.kontakty = kontakty;
      this.l = this.kontakty.length;
      console.log(this.l);

    });


  }

}
