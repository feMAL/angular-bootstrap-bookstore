import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public operation: String
  public book: Book

  constructor() { 
    this.book= new Book('',[{}],[{}],[{}],1,2000,{},100,1,'','','','');
  }

  ngOnInit() {
    this.operation='crear'
  }

  createBook(){
    console.log(this.book)
  }

}
