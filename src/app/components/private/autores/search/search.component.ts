import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service'

@Component({
  selector: 'app-autor-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public autorsFound: any[] = []

  constructor(
    private _autorService: AutorService
  ) { }

  ngOnInit() {
    this._autorService.getAllAutors()
      .subscribe((data:any)=>{
        this.autorsFound = data
        console.log(this.autorsFound)
      },err=>{
        console.error(err.message)
      })    
  }

  buscarLibro(search:string){
    this._autorService.getAutorsByName(search)
      .subscribe((data)=>{
        console.log(data)
      },err=>{
        console.error(err.message)
      })
  }

}
