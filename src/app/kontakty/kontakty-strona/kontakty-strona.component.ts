import { Component, OnInit } from '@angular/core';
import { KontaktyService } from 'src/app/service/kontakty.service';

@Component({
  selector: 'app-kontakty-strona',
  templateUrl: './kontakty-strona.component.html',
  styleUrls: ['./kontakty-strona.component.scss']
})
export class KontaktyStronaComponent implements OnInit {

  tytul: string;

  constructor() { }

  ngOnInit() {
  }


}
