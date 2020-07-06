import { Component, OnInit } from '@angular/core';
import { KontaktyService } from 'src/app/service/kontakty.service';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-kontakty-nowy-kontakt',
  templateUrl: './kontakty-nowy-kontakt.component.html',
  styleUrls: ['./kontakty-nowy-kontakt.component.scss']
})
export class KontaktyNowyKontaktComponent implements OnInit {

  id: Number
  imie: string
  nazwisko: string

  constructor(
    private k: KontaktyService,
    private router: Router
   ) { }

  ngOnInit() {
    
  }

  add() {

    this.k.dodajKontakt({
      id: 4,
      imie: this.imie,
      nazwisko: this.nazwisko
    });

    this.router.navigate(['/kontakty']);
    
  }

}
