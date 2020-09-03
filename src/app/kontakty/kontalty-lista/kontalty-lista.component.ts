import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { RequiredValidator } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

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
  kontakty: Kontakt[];
  isshow = false;
  kontakt: Kontakt;
  colorA = '#3b5b96';
  destroyed: any;


  constructor(private ko: KontaktyService) { }

  ngOnInit() {
    this.zmiany = false;
    // this.kontakty = this.k.pobierzKontakty();
    this.getKontakt();

  }

  aktualizacja(zmiany: boolean) {
    this.zmiany = zmiany;
  }



  detale(i) {
    this.kontakt = this.kontakty[i];
    this.zmiany = true;
  }

  getKontakt() {
    this.ko.pobierzKontakty().subscribe((response) => {
      this.kontakty = response;
    }
    );
  }

}
