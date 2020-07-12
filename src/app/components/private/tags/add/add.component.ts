import { Component, OnInit } from '@angular/core';

import { Tag } from 'src/app/models/tag.model';
import { TagsService } from 'src/app/services/tags.service'

@Component({
  selector: 'app-tags-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public tagNew : Tag = new Tag()

  public message: string
  public messageType: string

  constructor(
    public _tagService: TagsService
  ) { }

  ngOnInit() {
  }

  createNewTag(){
    if(this.tagNew.tag){
      this._tagService.createTag(this.tagNew)
        .subscribe( (data:Tag) => {
          this.messageType= 'alert-success'
          this.message = `Editorial ${data.tag} Creada`
        },err=>{
          this.messageType= 'alert-danger'
          this.message = err.message        
        })
    }
  }

}
