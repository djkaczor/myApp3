import { Component, OnInit, Input } from '@angular/core';
import { Kategorie } from 'src/app/interface/kategorie';
import { MagazynService } from 'src/app/service/magazyn.service';
import { Magazyn } from 'src/app/interface/magazyn';

@Component({
  selector: 'app-magazyn-detale',
  templateUrl: './magazyn-detale.component.html',
  styleUrls: ['./magazyn-detale.component.scss']
})
export class MagazynDetaleComponent implements OnInit {

  @Input() doWyslania: Magazyn[];
  @Input() brakProduktow: boolean;
  @Input() szukanyText: string;

  kategorie = ['nazwaProduktu', 'nrProduktu'];

  i: number;

  constructor(private m: MagazynService) { }

  ngOnInit(): void {
    this.doWyslania = this.m.pobierzMagazyn();
  }





}
