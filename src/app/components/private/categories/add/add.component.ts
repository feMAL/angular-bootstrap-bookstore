import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category.model'

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public category: Category

  public messageType: string
  public message: string

  constructor(
    private _categoryService: CategoryService
  ) {
    this.category = new Category()
  }

  ngOnInit() {
  }

  createNewCategory(){
    this._categoryService.saveCategory(this.category)
    .subscribe( (data:Category) => {
      if(data._id){
        this.messageType = 'alert-success'
        this.message = `La categoria ${data.name} ha sido creada`
        
        /*Emmitir notificacion*/
        this.category = new Category()
      }
    },err=>{
      this.messageType = 'alert-danger'
      this.message = err.message
    })
  }
}
