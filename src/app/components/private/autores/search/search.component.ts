import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service'
import { Autor } from 'src/app/models/autor.model';

@Component({
  selector: 'app-autor-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public autorsFound: Autor[] = []
  public autorsFoundView: Autor[] = []

  constructor(
    private _autorService: AutorService
  ) { }

  ngOnInit() {
    this._autorService.getAllAutors()
      .subscribe((data:any)=>{
        this.autorsFound = data
        this.autorsFoundView = data
      },err=>{
        console.error(err.message)
      })    
  }

  buscarAutor(search:string){
    if(search){
      this._autorService.getAutorsByName(search)
      .subscribe((data: Autor[])=>{
        this.autorsFoundView = data

      },err=>{
        console.error(err.message)
      })
    }else{
      this.autorsFoundView = this.autorsFound
    }
  }

}
