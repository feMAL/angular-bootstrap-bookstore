import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { API_CONFIG } from './config/conf'
import { UserService } from './user.service'
import { Editorial } from 'src/app/models/editorial.model'


@Injectable({
    providedIn: 'root'
})

export class EditorialService {

    public urlBase = API_CONFIG._api

    constructor(
        private _http:HttpClient,
        private _userService: UserService
    ){}

    createEditorial(editorial: Editorial){
        let url = this.urlBase + API_CONFIG.uri.editorial

        let headers = new HttpHeaders().set('authorization',this._userService.getToken())
        
        return this._http.post(url,editorial, { headers } )
            .pipe( map( (data:any) => data.newEditorial ) )
    }

    updateEditorial(editorial:Editorial){
        let url = `${this.urlBase}${API_CONFIG.uri.editorial}/${editorial._id}`

        let headers = new HttpHeaders().set('authorization',this._userService.getToken())
        
        return this._http.put(url, editorial, { headers } )
            .pipe( map( (data:any) => data.editorialUpdated ) )
    }

    getAllEditorials(){
        let url = this.urlBase + API_CONFIG.uri.editorial

        return this._http.get(url)
            .pipe( map( (data:any) => data.editorials ) )
    }

    getEditorialByName(editorial:string){
        let url = this.urlBase + API_CONFIG.uri.editorial

        let params = new HttpParams().set('name',editorial);

        return this._http.get(url, {params})
            .pipe( map( (data:any) => {
                return data.editorials
            } ) )
    }

    getEditorialById(editorial: string){
        let url = `${this.urlBase}${API_CONFIG.uri.editorial}/${editorial}`

        return this._http.get(url)
            .pipe( map( (data:any) => data.editorial ) )
    }



}