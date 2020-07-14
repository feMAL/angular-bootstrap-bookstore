import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model'
import { Editorial } from 'src/app/models/editorial.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksArray       : Book []   //Array BASE de libros obtenidos.
  public booksArrayToShow : Book []   //Array de libros para la vista.

  /*  Variales de errores para la vista  */
  public message: string
  public messageType: string


  constructor(
    private _serviceBook: BookService
  ) { }

  ngOnInit() {
    //Al cargar el componente Solicito todos los libros al servidor
    this._serviceBook.getAllBooks()
      .subscribe( ( data: Book [] ) => {
        //Cargo mi array BASE con todos los libros solicitados
        this.booksArray = data
        //Cargo mi array para manejo de Vista
        this.booksArrayToShow = this.booksArray
      },err => {
        this.messageType = "alert-danger"
        this.message = err.message
      })
  }


  // Esta función se dispara al recibir el evento generado por el filtro
  showFilterSelected(event){
    //Obtenemos el objeto filtro
    let filter = event
    // Cargamos el array de Libros de la vista
    this.booksArrayToShow = this.booksArray

    //Valido si el filtro contiene ISBN del libro
    if(filter.isbn){
      //Filtro mi array de vista en base al ISBN solicitado
      this.booksArrayToShow = this.booksArray.filter(
        ( book:Book ) => book.isbn13 == filter.isbn 
      )
    }else if(filter.title){   // Valido si el filtro contiene Tituo del libro
      let expresion = new RegExp(filter.title, 'i')
      //Filtro mi array de vista en base al titulo solicitado
      this.booksArrayToShow = this.booksArrayToShow.filter(
        ( book:Book ) => book.title.match(expresion)
      )
      if(filter.editorial){ // Valido si el filtro CONTIENE editorial ADEMÁS del titulo
        let auxBookWithEditorial = []
        this.booksArrayToShow.filter( 
          (books:Book)=>{
            books.editorial.forEach(
              (element:Editorial)=> element._id == filter.editorial ? auxBookWithEditorial.push(books) : false
            )
            this.booksArrayToShow = auxBookWithEditorial
          }
        )
        if(filter.category){ // Valido si el filtro CONTIENE categoria, ADEMÁS de editorial y ADEMÁS del titulo
          let auxBookWithCategory =  []
          this.booksArrayToShow.filter(
            (book:Book) => {
              book.category.forEach(
                (categoriesBook:Category) =>  categoriesBook._id == filter.category ? auxBookWithCategory.push(book) : false 
              ) 
              this.booksArrayToShow = auxBookWithCategory
            }
          )
        }
      }else if(filter.category){ //busca por titulo y por Categoria pero no busca editorial
        let auxBookWithCategory =  []
          this.booksArrayToShow.filter(
            (book:Book) => {
              book.category.forEach(
                (categoriesBook:Category) =>  categoriesBook._id == filter.category ? auxBookWithCategory.push(book) : false 
              ) 
              this.booksArrayToShow = auxBookWithCategory   
            }
          )
      }
    }else{
      if(filter.editorial){ // Filtrar por Editorial seleccionada
        let auxBookWithEditorial = []
        this.booksArrayToShow.filter( 
          (books:Book)=>{
            books.editorial.forEach(
              (element:Editorial)=> element._id == filter.editorial ? auxBookWithEditorial.push(books) : false
            )
            this.booksArrayToShow = auxBookWithEditorial
          }
        )
      }else if(filter.category){ // Filtrar por Categoria seleccionada
        let auxBookWithCategory =  []
          this.booksArrayToShow.filter(
            (book:Book) => {
              book.category.forEach(
                (categoriesBook:Category) =>  categoriesBook._id == filter.category ? auxBookWithCategory.push(book) : false 
              ) 
              this.booksArrayToShow = auxBookWithCategory   
            }
          )
      }
    }
  }

}
