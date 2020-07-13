import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorialService } from 'src/app/services/editorial.service'
import { Editorial } from 'src/app/models/editorial.model';


@Component({
  selector: 'app-editorial-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})
export class EditComponent implements OnInit {

  public editorialNew: Editorial = new Editorial()

  public message: string
  public messageType: string

  constructor(
    private _activeRoute       : ActivatedRoute,
    private _router            : Router,
    private _editorialService  : EditorialService
  ) { }

  ngOnInit() {
    this.message = ''
    this.messageType =  ''
    this._activeRoute.params.subscribe(
      (data) => {
        let editorial:string = data['id']
        if(data['id']){
          this._editorialService.getEditorialById(editorial).subscribe(
            (data:Editorial) => {
              this.editorialNew = data
            },err => {
              this.messageType= 'alert-danger'
              this.message = err.message        
            }
          )
        }else{
          this._router.navigate(['../add']);
        }   
      })
  }

  updateEditorial(){
    this.message = ''
    this.messageType =  ''
    if(this.editorialNew._id){
      this._editorialService.updateEditorial(this.editorialNew)
        .subscribe( (data:Editorial) => {
          this.messageType = 'alert-success'
          this.message     = `Editorial ${data.name} actualizada`
        },err=>{
          this.messageType = 'alert-danger'
          this.message     = err.message        
        })
    }
  }
}
