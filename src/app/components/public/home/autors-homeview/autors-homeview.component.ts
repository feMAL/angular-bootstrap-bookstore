import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autors-homeview',
  templateUrl: './autors-homeview.component.html',
  styleUrls: ['./autors-homeview.component.css']
})
export class AutorsHomeviewComponent implements OnInit {

  public autorsHomeView: any[] = []

  constructor(
    public _autorService: AutorService
  ) { }

  ngOnInit() {
    this._autorService.getAllAutors()
      .subscribe((data:any)=>{
        this.autorsHomeView = data
        console.log(this.autorsHomeView)
      },err=>{
        console.error(err.message)
      })    
  }

}
