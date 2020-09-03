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
  

  constructor(private k: KontaktyService) { }

  id: number;

  ngOnInit() {
  }

  zamknij() {
    this.zmiany = !this.zmiany;
    this.zamknijDetale.emit(this.zmiany);
    window.location.reload();
  }

  delete() {
    this.id = this.kontakt.id;
    this.k.deleteKontakt(this.id);
    this.zamknij();

  }
}
