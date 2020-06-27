import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './config/conf'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlBase:string = API_CONFIG._api

  constructor(private _http:HttpClient) { }

  login(params){
    let url = this.urlBase + API_CONFIG.uri.login
    return this._http.post(url,params)
  }

  getToken = () => localStorage.getItem('token')
  
  getUser = () => localStorage.getItem('user')

  setToken = (token,user) => {
    localStorage.setItem('token',token)
    localStorage.setItem('user', JSON.parse(user)) 
  }

  removeToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
