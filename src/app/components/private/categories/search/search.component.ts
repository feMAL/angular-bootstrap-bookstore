import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service'

@Component({
  selector: 'app-categories-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public categoriesFound: any[] = []

  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._categoryService.getAllCategories()
      .subscribe((data:any)=>{
        this.categoriesFound = data
      },err=>{
        console.error(err.message)
      })    
  }

  buscarLibro(search:string){
    this._categoryService.getCategoryByName(search)
      .subscribe((data)=>{
        this.categoriesFound = data
      },err=>{
        console.error(err.message)
      })
  }


}
