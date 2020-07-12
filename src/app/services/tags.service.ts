import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { API_CONFIG } from './config/conf'
import { map } from 'rxjs/operators'
import { Tag } from '../models/tag.model'

@Injectable({
    providedIn: 'root'
})
export class TagsService {

    public urlBase:string = API_CONFIG._api

    constructor( private _http: HttpClient ) { }

    createTag( tag: Tag ){
        let url = this.urlBase + API_CONFIG.uri.tag

        return this._http.post(url, tag)
    }

    getTagsByName( name ) {

        let url = this.urlBase + API_CONFIG.uri.tag

        let params = new HttpParams().set('name',name)

        return this._http.get(url,{params}).pipe( map ( (data: any)=> { 
            return data.tags
        } ) )
    }

}