import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MagazynService } from 'src/app/service/magazyn.service';
import { Kategoria, Kategorie } from 'src/app/interface/kategorie';

@Component({
  selector: 'app-magazyn-nowy-produkt',
  templateUrl: './magazyn-nowy-produkt.component.html',
  styleUrls: ['./magazyn-nowy-produkt.component.scss']
})
export class MagazynNowyProduktComponent implements OnInit {

  kategorie: Kategorie[] = [];
  podKat: Kategorie;

  constructor(private k: MagazynService) { }

  ngOnInit(): void {
    this.kategorie = this.k.pobierzKategorie();
    console.log(this.kategorie);
  }

  pKid(i) {
    // this.podKat = this.kategorie[i];
    console.log(i);
  }

}
