import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service'
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categories-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public categoriesFound     : Category[] = []
  public categoriesFoundView : Category[] = []

  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._categoryService.getAllCategories()
      .subscribe((data:Category[])=>{
        this.categoriesFound = data
        this.categoriesFoundView = data
      },err=>{
        console.error(err.message)
      })    
  }

  buscarCategory(search:string){
    if(search){
      this._categoryService.getCategoryByName(search)
        .subscribe( (data: Category[])=>{
          this.categoriesFoundView = data
        },err=>{
          console.error(err.message)
      })
    }else{
      this.categoriesFoundView = this.categoriesFound
    }
  }


}
