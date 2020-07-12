import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service'
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public booksFound     : Book[] = []
  public booksFoundView : Book[] = []

  constructor(
    private _bookService: BookService
  ) { }

  ngOnInit() {
    this._bookService.getAllBooks()
      .subscribe( (data:Book[])=>{
        this.booksFound = data
        this.booksFoundView = data
      },err=>{
        console.error(err.message)
      })
    
  }

  buscarLibro(search:string){
    if(search){
      this._bookService.requestBooks(search)
        .subscribe( (data:Book[])=>{
          console.log(data)
          this.booksFoundView = data
        },err=>{
          console.error(err.message)
        })
    }else{
      this.booksFoundView = this.booksFound
    }
  }

  removeBook(book){
    console.log(`el libro que desea eliminar es:  ${book.title}`)
  }

}
