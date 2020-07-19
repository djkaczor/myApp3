import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { Adres } from 'src/app/interface/adres';

@Component({
  selector: 'app-kontakty-detale',
  templateUrl: './kontakty-detale.component.html',
  styleUrls: ['./kontakty-detale.component.scss']
})
export class KontaktyDetaleComponent implements OnInit {


  @Input() kontakt: Kontakt;
  @Input() zmiany: boolean;
  @Output() zamknijDetale = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  zamknij() {
    this.zmiany = !this.zmiany;
    this.zamknijDetale.emit(this.zmiany);
  }

}
