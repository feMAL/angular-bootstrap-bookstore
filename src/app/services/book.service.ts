import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserService } from '../services/user.service'

import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators';

import { Book } from '../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string

  constructor(
    private _http: HttpClient,
    private _userService: UserService
    ) {
    this.url = API_CONFIG._api
   }

  saveNewBook(book:Book){
    let url = this.url + API_CONFIG.uri.book

    let headers = new HttpHeaders().set('authorization', this._userService.getToken())

    return this._http.post(url,book,{headers}).pipe( map ( (newBook:any) => newBook.newBook ))
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
