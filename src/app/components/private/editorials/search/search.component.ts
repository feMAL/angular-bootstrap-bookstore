import { Component, OnInit } from '@angular/core';

import { Editorial } from 'src/app/models/editorial.model';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public editorialFound : Editorial[]
  public editorialFoundView : Editorial[]

  constructor(
    private _editorialService: EditorialService
  ) { }

  ngOnInit() {
    this._editorialService.getAllEditorials()
      .subscribe(
        (data:Editorial[]) => {
          this.editorialFound = data
          this.editorialFoundView =data
        },err=>{
          console.log(err.message)
        }
      )
  }

  buscarEditorial(search:string){
    if(search){
      this._editorialService.getEditorialByName(search)
      .subscribe((data:Editorial[])=>{
        this.editorialFoundView = data
      },err=>{
        console.error(err.message)
      })
    }else {
      this.editorialFoundView = this.editorialFound
    }
  }

  removeEditorial(editorial:Editorial){
    console.log('Desea eliminar '+ editorial)
  }

}
