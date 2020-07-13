import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-tags-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public tagsFoundView: Tag[] = []
  public tagsFound: Tag[] = []

  constructor(
    private _tagService: TagsService
  ) { }

  ngOnInit() {
    this._tagService.getAllTags()
      .subscribe( (resp:Tag[]) => {
        this.tagsFound = resp
        this.tagsFoundView = resp
      },err=>{
        console.log(err.message)
      })
  }

  buscarTag(search){
    if(search){
      this._tagService.getTagsByName(search)
        .subscribe( (resp: Tag[]) => {
          this.tagsFoundView = resp
        }, err => {
          console.log(err.message)
        } )
    }else{
      this.tagsFoundView = this.tagsFound
    }
  }

}
