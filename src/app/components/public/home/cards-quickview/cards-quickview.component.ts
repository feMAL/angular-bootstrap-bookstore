import { Component, OnInit, Input } from '@angular/core';

//SERVICIOS
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-cards-quickview',
  templateUrl: './cards-quickview.component.html',
  styleUrls: ['./cards-quickview.component.css']
})
export class CardsQuickviewComponent implements OnInit {

  @Input() filter
  
  public booksCards:[]=[]
  public title:string

  constructor(private _booksService:BookService) { }

  ngOnInit() {
    this.title = 'Libros del Servidor'
    this.showProducts()
  }

  showProducts(){
    this._booksService.requestBooks({})
      .subscribe((data:any) => {
        this.booksCards = data.book
        console.log(data)
      })
  }

  

}
