import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() filtroPara    : string  = "autor"
  @Input() formulario    : NgForm
  
  public title           : string
  
  public switchCheck     : boolean = false
  public showFilter      : boolean = true
  public criterio        : string
  
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
      this.getEditorial()
    }
  }

  getFilterOPT(categorySel, editorialSel){
    console.log(this.formulario)
    console.log(categorySel)
    console.log(editorialSel)

  }

  switchValue(value){
    this.switchCheck = value
    if(this.switchCheck){
      
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
  
  getEditorial(){
      this._serviceEditorial.getAllEditorials()
        .subscribe((data:any)=>{
          this.allEditorials = data
        },err=>{
          this.messageType = 'alert-danger'
          this.message = err.message
        })
  }

}
