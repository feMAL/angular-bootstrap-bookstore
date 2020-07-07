import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { API_CONFIG } from './config/conf'

@Injectable({
    providedIn: 'root'
})

export class EditorialService {

    public urlBase = API_CONFIG._api

    constructor(
        private _http:HttpClient
    ){}

    getAllEditorials(){
        let url = this.urlBase + API_CONFIG.uri.editorial

        return this._http.get(url)
            .pipe( map( (data:any) => data.editorials ) )
    }

    getEditorialByName(editorial){
        let url = this.urlBase + API_CONFIG.uri.editorial

        let params = new HttpParams().set('name',editorial);

        return this._http.get(url, {params})
            .pipe( map( (data:any) => {
                return data.editorials
            } ) )
    }

}