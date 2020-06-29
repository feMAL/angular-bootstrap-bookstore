import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public operations:string = 'crear'

  constructor() { }

  ngOnInit() {
    this.operations = 'crear'
  }

}
