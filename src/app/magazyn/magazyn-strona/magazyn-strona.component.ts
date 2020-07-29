import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazyn-strona',
  templateUrl: './magazyn-strona.component.html',
  styleUrls: ['./magazyn-strona.component.scss']
})
export class MagazynStronaComponent implements OnInit {
  tytul: string;
  constructor() { }

  ngOnInit(): void {
  }

}
