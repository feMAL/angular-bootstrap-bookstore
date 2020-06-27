import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errorMessage:string

  constructor(private _loginService:UserService, private _route: Router) { }

  ngOnInit() {
  }

  validSession(){
    return this._loginService.getToken()
  }

  sendCredentials(usr,pass){
    
    let user = new User( )

    user.email = usr,
    user.password = pass,
    user.gethash =  true


    this._loginService.login(user).subscribe(
      (data:any)=>{
        
        if(!data.token){
          this.errorMessage = "El proceso de login no se realizó correctamente"
        }else{
          console.log(data)
          console.log(JSON.stringify(data.user))
          this._loginService.setToken(data.token,data.user)

        }
      },(err)=> {
        this.errorMessage = err.message
      }
    )
  }

}
