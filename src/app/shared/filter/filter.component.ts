import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { EditorialService } from 'src/app/services/editorial.service';

import { Book } from 'src/app/models/book.model';
import { Editorial } from 'src/app/models/editorial.model';
import { Category } from 'src/app/models/category.model';
import { EditorialsModule } from 'src/app/components/private/editorials/editorials.module';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() filtroPara    : string  = "autor"
  @Output() dataFilter   = new EventEmitter()
  
  public title           : string
  
  public switchCheck     : boolean = false
  public showFilter      : boolean = true
  public criterio        : string
  
  public allCategories   : Category[]
  public allEditorials   : Editorial[]
  
  public messageType     : string
  public message         : string

  public filterSelected = {
    isbn      : null,
    title     : '',
    editorial : 0,
    category  : 0
  }
  
  constructor(
    private _categoryService : CategoryService,
    private _serviceEditorial: EditorialService 
  ) { }

  ngOnInit() {
  
    if(this.filtroPara === 'autor'){
      this.title = 'Filtrar Autores'
    }else{
      this.title = 'Filtrar Libros'
      this.getCategories()
      this.getEditorial()
    }
  }

  getBookFilter(){

    this.dataFilter.emit(this.filterSelected)

  }

  switchValue(value){
    this.switchCheck = value
    if(this.switchCheck){
      this.filterSelected.title = ''
    }else{
      this.filterSelected.isbn = null
    }
  }

  getCategories(){
    this._categoryService.getAllCategories()
      .subscribe( (data:Category[])=>{
        this.allCategories = data
      },err=>{
        this.messageType = 'alert-danger'
        this.message = err.message
      })
  }
  
  getEditorial(){
      this._serviceEditorial.getAllEditorials()
        .subscribe((data:Editorial[])=>{
          this.allEditorials = data
        },err=>{
          this.messageType = 'alert-danger'
          this.message = err.message
        })
  }

}
