import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { EditorialService } from 'src/app/services/editorial.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() filtroPara    : string = "autor"
  public showFilter      : boolean = true
  public title           : string
  public allCategories   : []
  public allEditorials   : []
  public messageType     : string
  public message         : string

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
    }
  }

  getCategories(){
    this._categoryService.getAllCategories()
      .subscribe( (data:any)=>{
        this.allCategories = data
      },err=>{
        this.messageType = 'alert-danger'
        this.message = err.message
      })
  }
  
  getEditorial(editorial){
      this._serviceEditorial.getAllEditorials()
        .subscribe((data:any)=>{
          this.allEditorials = data
        },err=>{
          this.messageType = 'alert-danger'
          this.message = err.message
        })
  }

}
