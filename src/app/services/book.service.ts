import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { API_CONFIG } from './config/conf'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string

  constructor(private _http: HttpClient) {
    this.url = API_CONFIG._api + API_CONFIG.uri.book
   }

  requestBooks(filters){
    let target = this.url+'/'
    return this._http.get(target)
  }

}
