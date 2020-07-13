import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators'

import { Autor } from '../models/autor.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private urlBase:string

  constructor(
    private _serviceAutors : HttpClient,
    private _userService   : UserService
    ) {
    this.urlBase= API_CONFIG._api
   }

  getAutorsByName(name:string){
    let url = this.urlBase + API_CONFIG.uri.autor
    
    let params = new HttpParams().set('name',name)

    return this._serviceAutors.get( url, { params } )
      .pipe( map( (response:any)=>{
        return response.autors
      } ) )
  }
  
  createNewAutor(autor: Autor){
    let url = this.urlBase + API_CONFIG.uri.autor

    let headers = new HttpHeaders().set('authorization',this._userService.getToken())

    return this._serviceAutors.post( url, autor, { headers } )
  }

  updateAutor(autor: Autor){
    let url = `${this.urlBase}${API_CONFIG.uri.autor}/${autor._id}`

    let headers = new HttpHeaders().set('authorization',this._userService.getToken())

    return this._serviceAutors.put( url, autor, { headers } )
      .pipe( map ( (data:any ) => data.autorUpdated  ) )
  }

  getUniqueAutor(autorID: string){
    let url = `${this.urlBase}${API_CONFIG.uri.autor}/${autorID}`

    return this._serviceAutors.get(url).pipe( map ( (data:any) => data.autor))
  }

  getAllAutors(  ){
    let url = `${this.urlBase}${API_CONFIG.uri.autor}`

    return this._serviceAutors.get(url).pipe( map( (data:any) =>  data.autors ) )
  }
}
