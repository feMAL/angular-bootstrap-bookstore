import { Component, OnInit } from '@angular/core';

import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autor-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})
export class EditComponent implements OnInit {

  public autor: Autor = new Autor()

  public message: string
  public messageType: string

  constructor(
    private _activeRoute  : ActivatedRoute,
    private _router       : Router,
    private _autorService : AutorService
  ) { }

  ngOnInit() {
    this._activeRoute.params.subscribe( (params) => {
      let idAutor: string = params['id']
      if( idAutor.length == 24 ){
        this._autorService.getUniqueAutor(idAutor)
          .subscribe( (data:Autor) => {
            this.autor = data
          },err => {
            this.messageType = 'alert-danger'
            this.message = err.message
          } )
      }else{
        this._router.navigate(['../add']);
      }
    } )
  }

  updateAutor(){
    if(this.autor._id){
      if(this.autor.name){
        this._autorService.updateAutor(this.autor)
          .subscribe( (data:Autor) => {
            this.messageType = 'alert-success'
            this.message = `El/La Autor/a ${data.name} ha sido actualizado`
          },err => {
            this.messageType = 'alert-danger'
            this.message = err.message
          })
      }
    }
  }

}
