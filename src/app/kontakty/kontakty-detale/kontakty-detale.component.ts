import { Component, OnInit, Input } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';

@Component({
  selector: 'app-kontakty-detale',
  templateUrl: './kontakty-detale.component.html',
  styleUrls: ['./kontakty-detale.component.scss']
})
export class KontaktyDetaleComponent implements OnInit {


  @Input() kontakt: Kontakt;

  constructor() { }

  ngOnInit() {

  }

}
