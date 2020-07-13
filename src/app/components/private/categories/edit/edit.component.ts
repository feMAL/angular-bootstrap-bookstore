import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})
export class EditComponent implements OnInit {

  public category: Category

  public messageType: string
  public message: string

  constructor(
    private _activeRouter    : ActivatedRoute,
    private _router          : Router,
    private _categoryService : CategoryService
  ) { }

  ngOnInit() {
    this._activeRouter.params.subscribe((param => {
      let id: string = param['id']
      if(id.length == 24){
        this._categoryService.getCategoryById(id)
          .subscribe( (data:Category) => {
            this.category = data
          }, err=>{
            this.messageType = 'alert-danger'
            this.message = err.message
          } )
      }else{
        this._router.navigate(['../add'])
      }
    }))
  }

  updateCategory(){
    if(this.category._id){
      if(this.category.name){
        this._categoryService.updateCategory(this.category)
          .subscribe((data)=>{
            console.log(data)
          },err=>{
            this.messageType = 'alert-danger'
            this.message = err.message
          })
      }
    }
  }

}
