import { Component, OnInit, Input } from '@angular/core';

//SERVICIOS
import { BookService } from 'src/app/services/book.service';

//MODELS
import { Autor } from 'src/app/models/autor.model';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-cards-quickview',
  templateUrl: './cards-quickview.component.html',
  styleUrls: ['./cards-quickview.component.css']
})
export class CardsQuickviewComponent implements OnInit {

  @Input() autorFilter: Autor
  
  public booksCards : Book[] = []
  public itemBook
  public puntero    : number = 0
  public title      : string
  public loading    : boolean = false

  constructor(
    private _booksService:BookService
  ) { }

  ngOnInit() {
    this.title = 'Libros del Servidor'
    this.showProducts()
  }

  showProducts(){
    this._booksService.getBooksOfAutors(this.autorFilter._id)
      .subscribe( (data:Book[]) => {
        this.booksCards = data
        if(this.booksCards.length > 0){
          this.itemBook = this.booksCards[0]
          this.loading = true
        }
      })
  }
}
