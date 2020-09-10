import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { Adres } from 'src/app/interface/adres';
import { KontaktyService } from 'src/app/service/kontakty.service';

@Component({
  selector: 'app-kontakty-detale',
  templateUrl: './kontakty-detale.component.html',
  styleUrls: ['./kontakty-detale.component.scss']
})
export class KontaktyDetaleComponent implements OnInit {


  @Input() kontakt: Kontakt;
  @Input() zmiany: boolean;
  @Output() zamknijDetale = new EventEmitter<boolean>();
  // @Output() otworzEdycje = new EventEmitter<boolean>();

  edycja: boolean;

  constructor(private k: KontaktyService) { }

  id: number;

  ngOnInit() {
    this.edycja = false;
  }

  zamknij() {
    this.zmiany = !this.zmiany;
    this.zamknijDetale.emit(this.zmiany);

  }

  edytuj() {
    this.edycja = !this.edycja;
  }

  delete() {
    this.id = this.kontakt.id;
    this.k.deleteKontakt(this.id);
    this.zamknij();
    window.location.reload();
  }
}
