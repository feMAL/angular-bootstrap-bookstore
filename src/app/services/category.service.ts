import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { API_CONFIG } from './config/conf';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient
  ) { }
  
  getCategoryByName(category){

    if (category) {
      let url = API_CONFIG._api + API_CONFIG.uri.category

      let params = new HttpParams().set('name',category)
  
      return this._http.get(url,{params}).pipe( map( (data:any)=>{
        return data.categorys
      } ) )  
    }
  }

}