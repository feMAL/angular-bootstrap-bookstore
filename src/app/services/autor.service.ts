import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private urlBase:string

  constructor( private _serviceAutors:HttpClient) {
    this.urlBase= API_CONFIG._api
   }

  getAutorsByName(name:string){
    let url = this.urlBase + API_CONFIG.uri.autor
    
    let params = new HttpParams().set('name',name)

    return this._serviceAutors.get(url,{params}).pipe( map( (response:any)=>{
      return response.autors
    } ) )
  }
  
  createNewAutor(autor,passport){
    let url = this.urlBase + API_CONFIG.uri.autor

    let headers = new HttpHeaders().set('authorization',passport)

    return this._serviceAutors.post(url,autor,{headers})
  }

  getUniqueAutor(autorID){
    let url = `${this.urlBase}${API_CONFIG.uri.autor}/${autorID}`

    return this._serviceAutors.get(url)
  }

  getAllAutors( ){
    
  }
}
