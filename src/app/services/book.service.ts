import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string

  constructor(private _http: HttpClient) {
    this.url = API_CONFIG._api
   }

  requestBooks(filters){
    let target = `${this.url}${API_CONFIG.uri.book}/`
    return this._http.get(target)
  }

  getUniqueBook(bookID){
    let url = `${this.url}${API_CONFIG.uri.book}/${bookID}`

    return this._http.get(url)
  }

  getAllBooks(){
    let url = this.url + API_CONFIG.uri.book

    return this._http.get(url).pipe( map( (data:any) => data.book ) )
  }

}
