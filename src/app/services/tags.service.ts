import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { API_CONFIG } from './config/conf'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Tag } from '../models/tag.model'
import { UserService } from './user.service'


@Injectable({
    providedIn: 'root'
})
export class TagsService {

    public urlBase:string = API_CONFIG._api

    constructor(
        private _http: HttpClient,
        private _userService: UserService
    ) { }


    createTag( tag: Tag ): Observable <Tag> {
        let url = this.urlBase + API_CONFIG.uri.tag

        let headers = new HttpHeaders().set('authorization',this._userService.getToken())
        
        return this._http.post(url, tag, {headers}).pipe( map ( (data:any) => data.tags))
    }

    updateTag(tag: Tag): Observable <Tag> {
        let url = `${this.urlBase}${API_CONFIG.uri.tag}/${tag._id}`

        let headers = new HttpHeaders().set('authorization',this._userService.getToken())
        
        return this._http.put(url, tag, {headers}).pipe( map ( (data:any) => data.tagUpdated))
    }

    getTagById(id: string): Observable <Tag>{ 
        let url = `${this.urlBase}${API_CONFIG.uri.tag}/${id}`


        return this._http.get(url).pipe( map((data:any) => data.tag))
    }

    getTagsByName( name: string ) {

        let url = this.urlBase + API_CONFIG.uri.tag

        let params = new HttpParams().set('tag',name)

        return this._http.get(url,{params}).pipe( map ( (data: any)=> { 
            return data.tags
        } ) )
    }

    getAllTags () {
        let url = this.urlBase + API_CONFIG.uri.tag

        return this._http.get(url).pipe( map ( (data: any)=> { 
            return data.tags
        } ) )
    }

}