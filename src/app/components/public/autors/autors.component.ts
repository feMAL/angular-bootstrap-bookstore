import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service'

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit {
  
  public autorsArray       : Autor []
  public autorsArrayToShow : Autor []

  /*  Variales de errores para la vista  */
  public message: string
  public messageType: string

  constructor(
    private _autorService: AutorService
  ) { }

  ngOnInit() {
    this._autorService.getAllAutors()
      .subscribe( (data: Autor[]) => {
        this.autorsArray = data
        this.autorsArrayToShow = data
      },err =>{
        this.messageType = 'alert-danger'
        this.message = err.message
      } )
  }

  showFilterSelected(event){
    let filter = event
    this.autorsArrayToShow = this.autorsArray
    if(filter.name){
      this.filterName(filter.name)
      if(filter.nationality){
        this.filterNationality(filter.nationality)
      }
    }else if(filter.nationality){
      this.filterNationality(filter.nationality)
    }
  }

  filterNationality(value){
    let expression = new RegExp(value,'i')

    this.autorsArrayToShow = this.autorsArrayToShow.filter( (autor: Autor) => autor.nationality.search(expression))
  }

  filterName(value){
    let expression = new RegExp(value,'i')

    this.autorsArrayToShow = this.autorsArrayToShow.filter( (autor: Autor) => autor.name.search(expression))
  }

}
