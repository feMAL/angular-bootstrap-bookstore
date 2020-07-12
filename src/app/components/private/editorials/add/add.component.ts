import { Component, OnInit } from '@angular/core';

import { Editorial } from 'src/app/models/editorial.model'
import { EditorialService } from 'src/app/services/editorial.service'

@Component({
  selector: 'app-editorial-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public editorialNew: Editorial = new Editorial()

  public message: string
  public messageType: string

  constructor(
    private _editorialService: EditorialService
  ) { }

  ngOnInit() {

  }

  createNewEditorial(){
    if(this.editorialNew.name){
      this._editorialService.createEditorial(this.editorialNew)
        .subscribe( (data:Editorial) => {
          this.messageType= 'alert-success'
          this.message = `Editorial ${data.name} Creada`
        },err=>{
          this.messageType= 'alert-danger'
          this.message = err.message        
        })
    }
  }

}
