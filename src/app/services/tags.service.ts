import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class TagsService {

    public urlBase:string = API_CONFIG._api

    constructor( private _http: HttpClient ) { }

    getTagsByName( name ) {

        let url = this.urlBase + API_CONFIG.uri.tag

        let params = new HttpParams().set('name',name)

        return this._http.get(url,{params}).pipe( map ( (data: any)=> { 
            return data.tags
        } ) )
    }

}