import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( private _userService: UserService ) { }

  ngOnInit() {
  }

  validSession(){
    return this._userService.getToken()
  }

  cerrarSession(){
    this._userService.removeToken()
  }

}
