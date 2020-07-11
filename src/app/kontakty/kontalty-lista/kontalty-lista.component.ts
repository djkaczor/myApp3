import { Component, OnInit } from '@angular/core';
import { Kontakt } from 'src/app/interface/kontakt';
import { KontaktyService } from 'src/app/service/kontakty.service';

@Component({
  selector: 'app-kontalty-lista',
  templateUrl: './kontalty-lista.component.html',
  styleUrls: ['./kontalty-lista.component.scss']
})
export class KontaltyListaComponent implements OnInit {


  kontakty: Kontakt[];
  isshow = false;
  kontakt: Kontakt;
  colorA = '#3b5b96';



  constructor(private k: KontaktyService) { }

  ngOnInit() {
    this.kontakty = this.k.pobierzKontakty();
    console.log(this.kontakty);
    
  }

  detale(i) {
    this.kontakt = this.kontakty[i];
    console.log(i, this.kontakt);
  }

  zmienIsShow() {
    this.isshow = !this.isshow;
  }

}
