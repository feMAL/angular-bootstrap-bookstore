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

  updateBook(book){
    let url = `${this.url}${API_CONFIG.uri.book}/${book._id}`

    let headers = new HttpHeaders().set('authorization', this._userService.getToken())
        
    return this._http.put(url,book,{headers}).pipe( map ( (updatedBook:any) => updatedBook.BookUpdated ) )
  }

  requestBooks(filters){
    let target = `${this.url}${API_CONFIG.uri.book}/`

    return this._http.get(target)
  }

  getBooksOfAutors(autorID){
    let url = `${this.url}${API_CONFIG.uri.book}/${autorID}`

    return this._http.post(url,{}).pipe( map ( ( data:any ) => data.book ) )
  }

  getUniqueBook(bookID){
    let url = `${this.url}${API_CONFIG.uri.book}/${bookID}`

    return this._http.get(url).pipe( map ( ( data:any ) => data.book[0] ) )
  }

  getAllBooks(){
    let url = this.url + API_CONFIG.uri.book

    return this._http.get(url).pipe( map( (data:any) => data.book ) )
  }

}
