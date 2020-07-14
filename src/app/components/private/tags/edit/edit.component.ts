import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { TagsService } from 'src/app/services/tags.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tags-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})
export class EditComponent implements OnInit {

  public tagNew : Tag = new Tag()

  public message: string
  public messageType: string

  constructor(
    private _tagService      : TagsService,
    private _activeRouter    : ActivatedRoute,
    private _router          : Router
  ) { }

  ngOnInit() {
    this._activeRouter.params.subscribe((param => {
      let id: string = param['id']
      if(id.length == 24){
        this._tagService.getTagById(id)
          .subscribe( (data:Tag) => {
            this.tagNew = data
          }, err=>{
            this.messageType = 'alert-danger'
            this.message = err.message
          } )
      }else{
        this._router.navigate(['../add'])
      }
    }))
  }

  updateTag(){
    if(this.tagNew._id){
      if(this.tagNew.tag){
        this._tagService.updateTag(this.tagNew)
          .subscribe( (data : Tag) => {
            this.messageType = 'alert-success'
            this.message = `Se ha actualizado el tag ${data.tag}`
          },err=>{
            this.messageType = 'alert-danger'
            this.message = err.message      
          })
      }
    }
  }

}
