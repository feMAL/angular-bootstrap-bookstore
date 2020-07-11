import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model'
import { Autor } from 'src/app/models/autor.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksArray       : Book []
  public booksArrayToShow : Book []

  public message: string
  public messageType: string


  constructor(
    private _serviceBook: BookService
  ) { }

  ngOnInit() {
    this._serviceBook.getAllBooks()
      .subscribe( ( data: Book [] ) => {
        this.booksArray = data

        this.booksArray.forEach(element => { console.log(element.isbn13) })
      },err => {
        this.messageType = "alert-danger"
        this.message = err.message
      })
  }

  showFilterSelected(event){
    let filter = event

    console.log(filter)

    if(filter.isbn){
      this.booksArrayToShow = this.booksArray.filter(
        ( book:Book ) => book.isbn13 == filter.isbn 
      )
    }else if(filter.title){
      console.log( 'Buscar por Titulo' )  
      let expresion = new RegExp(filter.title, 'i')
      this.booksArrayToShow = this.booksArray.filter(
        ( book:Book ) => book.title.match(expresion) 
      )
      if(filter.editorial){
        console.log( 'Buscar por Titulo y editorial' )  
        this.booksArrayToShow = this.booksArrayToShow.filter( 
          (books:Book)=> books.editorial.forEach(
            (element:any)=> element._id == filter.editorial
          )
        )
        if(filter.category){
          console.log( 'Buscar por Titulo, editorial y categoria' )    
          this.booksArrayToShow = this.booksArrayToShow.filter(
            (book:Book) => book.category.forEach( 
              (categoriesBook:Category) => categoriesBook._id == filter.category 
            )
          )
        }
      }else if(filter.category){
        console.log( 'Buscar por Titulo y categoria' )
      }
    }else{
      console.log( 'Buscar por editorial o categoria' )
    }

    console.log(this.booksArrayToShow)
  }

}
