import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-book-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public booksFound: any[] = []

  constructor(
    private _bookService: BookService
  ) { }

  ngOnInit() {
    this._bookService.getAllBooks()
      .subscribe((data:any)=>{
        this.booksFound = data
        console.log(this.booksFound)
      },err=>{
        console.error(err.message)
      })
    
  }

  buscarLibro(search:string){
    this._bookService.requestBooks(search).subscribe((data)=>{
      console.log(data)
    },err=>{
      console.error(err.message)
    })
  }

  removeBook(book){
    console.log(`el libro que desea eliminar es:  ${book.title}`)
  }

}
