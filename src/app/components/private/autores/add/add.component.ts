import { Component, OnInit } from '@angular/core';

import { AutorService } from 'src/app/services/autor.service';
import { Autor } from 'src/app/models/autor.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-autor-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public autor: Autor
  public message: string
  public messageType: string

  constructor(
    private _autorService: AutorService,
    private _userService: UserService
  ) {
    this.autor = new Autor('','','','',0,0,'')
  }

  ngOnInit() { }

  createNewAutor() {
    this._autorService.createNewAutor(this.autor,this._userService.getToken())
      .subscribe( (data:any) => {
        console.log(data)
        this.messageType = 'alert-success'
        this.message = `El Autor/a ${data.newAutor.name} se ha creado`

        this.autor = new Autor('','','','',0,0,'')
      },err =>{
        this.messageType = 'alert-danger'
        this.message = err.message
      })   
  }

}
