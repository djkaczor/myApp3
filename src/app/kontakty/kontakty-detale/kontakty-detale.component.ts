import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { Adres } from 'src/app/interface/adres';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontakty-detale',
  templateUrl: './kontakty-detale.component.html',
  styleUrls: ['./kontakty-detale.component.scss']
})
export class KontaktyDetaleComponent implements OnInit {


  @Input() kontakt: Kontakt;
  @Input() zmiany: boolean;
  @Input() adres: Adres[] = [];
  @Output() zamknijDetale = new EventEmitter<boolean>();
  @Output() otworzEdycje = new EventEmitter<boolean>();

  nrKlienta: number;
  constructor(private k: KontaktyService, private router: Router) { }

  id: string;


  ngOnInit() {

  }

  zamknij() {
    this.zmiany = !this.zmiany;
    this.zamknijDetale.emit(this.zmiany);
  }

  edycja() {
    // this.k.afs.collection('kontakty').valueChanges().subscribe( v => console.log(v.length));
  }

  delete() {
    this.k.skasujKontakt(this.kontakt.id);
    this.zamknij();
  }
}
