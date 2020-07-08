import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksArray: Book []

  public message: string
  public messageType: string


  constructor(
    private _serviceBook: BookService
  ) { }

  ngOnInit() {
    this._serviceBook.getAllBooks()
      .subscribe( ( data: Book [] ) => {
        this.booksArray = data
      },err => {
        this.messageType = "alert-danger"
        this.message = err.message
      })
  }

}
