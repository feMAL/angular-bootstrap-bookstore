import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-cards',
  templateUrl: './books-cards.component.html',
  styleUrls: ['./books-cards.component.css']
})
export class BooksCardsComponent implements OnInit {

  public titulo:string

  constructor() {
    this.titulo = "Novedades"
  }

  ngOnInit() {
  }

}
