import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { API_CONFIG } from './config/conf';
import { Category } from 'src/app/models/category.model'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _userService: UserService,
    private _http: HttpClient
  ) { }
  
  getCategoryByName(category){

    if (category) {
      let url = API_CONFIG._api + API_CONFIG.uri.category

      let params = new HttpParams().set('name',category)
  
      return this._http.get(url,{params}).pipe( map( (data:any)=> data.categorys ) )  
    }
  }

  getCategoryById(categoryId:string){
    if (categoryId) {
      let url = `${API_CONFIG._api}${API_CONFIG.uri.category}/${categoryId}`
  
      return this._http.get(url).pipe( map( (data:any)=> data.category ) )  
    }
  }

  getAllCategories(){
    let url = API_CONFIG._api + API_CONFIG.uri.category

    return this._http.get(url).pipe( map ( (data:any) => data.categorys ) )
  }

  saveCategory(category:Category){
    if(category.name){
      let url = API_CONFIG._api + API_CONFIG.uri.category

      let headers = new HttpHeaders().set('authorization',this._userService.getToken())

      return this._http.post(url,category,{headers}).pipe( map ( (data:any) => data.newCategory ) ) 
    }else{
      console.log('no ha enviado nombre de categoria')
    }
  }
  
  updateCategory(category:Category){
    let url = `${API_CONFIG._api}${API_CONFIG.uri.category}/${category._id}`

    let headers = new HttpHeaders().set('authorization',this._userService.getToken())

    return this._http.put(url,category,{headers}).pipe( map ( (data:any) => data ) ) 
  }
}