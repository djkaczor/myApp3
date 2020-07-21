import { Component, OnInit } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { trigger, transition, style, animate } from '@angular/animations';

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



  constructor(private k: KontaktyService) { }

  ngOnInit() {
    this.zmiany = false;
    this.kontakty = this.k.pobierzKontakty();
  }

  aktualizacja_test(zmiany: boolean) {
    this.zmiany = zmiany;
  }

  detale(i) {
    this.kontakt = this.kontakty[i];
    this.zmiany = true;
  }
}
