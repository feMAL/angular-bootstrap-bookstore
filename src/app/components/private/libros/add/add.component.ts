import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model'

import { AutorService } from 'src/app/services/autor.service';
import { CategoryService } from 'src/app/services/category.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { TagsService } from 'src/app/services/tags.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  /*ATRIBUTOS DEL PROCESO ALTA LIBRO*/
  public book: Book
  
  public showAutorsFound
  public showAutors: Boolean = false
  public listAutors: any[] = []

  public showCategoriesFound
  public showCategories: Boolean = false
  public listCategories: any[] = []
  
  
  public showEditorialFound
  public showEditorial: Boolean = false
  public listEditorial: any[] = []

  public showTagsFound
  public showTags: Boolean = false
  public listTags: any[] = []

  public is_updated:Boolean = false

  // ATRIBUTOS DEL PROCESO POST ALTA

  public message: string
  public messageType: string

  constructor(
    private _serviceBook: BookService,
    private _serviceAutor: AutorService,
    private _serviceCategory: CategoryService,
    private _serviceEditorial: EditorialService,
    private _serviceTags: TagsService
  ) { 
    this.book= new Book('',[{}],[{}],'',0,1,12,2000,[{}],'','','',[{}],{},[{}],'','');
  }

  ngOnInit() {}

  /*      BOOKS 
    Books Funcionales  */

  createBook(){

    if(this.listEditorial.length > 0 && this.listAutors.length > 0 && this.listCategories.length > 0 ){
      
      this.book.editorial = this.listEditorial
      this.book.autor = this.listAutors
      this.book.category = this.listCategories
      this.book.tags = this.listTags

      console.log(this.book)

      this._serviceBook.saveNewBook(this.book)
        .subscribe(data => {
          this.messageType = 'alert-success'
          this.message = `El Libro "${data.title}" se ha creado`

          this.book= new Book('',[{}],[{}],'',0,1,12,2000,[{}],'','','',[{}],{},[{}],'','');
          this.book.editorial = []
          this.book.autor = []
          this.book.category = []
          this.book.tags = []

        },err=>{
          console.log(err)
          this.messageType = 'alert-danger'
          this.message = err.message
        })
    }
    

  }

  /*      AUTORS 
    AUTORS Funcionales  */

  addAutorToBook(autor){
    if(autor){
      if(this.listAutors.indexOf(autor)<0){
        this.listAutors.push(autor);
      }else{
        console.log('este registro ya se encuentra en la lista')
      }
    }
  }
  
  removeAutorToBook(autor){
    this.listAutors.splice(this.listAutors.indexOf(autor),1);
  }

  getAutor(autor){
    let termino:string = autor
    if(termino.length >= 4){
      this.showAutors = true
      this._serviceAutor.getAutorsByName(termino).subscribe((data:any)=>{
        this.showAutorsFound = data
      },err=>{
        console.warn(err.message)
      })
    }else{
      this.showAutors=false
    }
  }

  /*      EDITORIAL 
    Editorial Funcionales */

  addEditorialToBook(editorial){
    if(editorial){
      if(this.listEditorial.indexOf(editorial) < 0){
        this.listEditorial.push(editorial);
      }else{
        console.log('este registro ya se encuentra en la lista')
      }
    }
  }

  removeEditorialToBook(editorial){
    this.listEditorial.splice(this.listEditorial.indexOf(editorial),1);
  }

  getEditorial(editorial){
    let termino:string = editorial
    if(termino.length >= 3){
      this._serviceEditorial.getEditorialByName(termino).subscribe((data:any)=>{
        this.showEditorial = true
        this.showEditorialFound = data
      },err=>{
        console.warn(err.message)
      })
    }else{
      this.showEditorial=false
    }
  }

  /*      CATEGORIES 
    Categories Funcionales  */

  removeCategorieToBook(categories){
    this.listCategories.splice(this.listCategories.indexOf(categories),1);
  }

  addCategorieToBook(categorie){
    if(categorie){
      if(this.listCategories.indexOf(categorie) < 0){
        this.listCategories.push(categorie);
      }else{
        console.log('este registro ya se encuentra en la lista')
      }
    }
  }

  getCategories(categorie){
    let termino:string = categorie
    if(termino.length >= 3){
      this._serviceCategory.getCategoryByName(termino).subscribe((data:any)=>{
        this.showCategories = true
        this.showCategoriesFound = data
      },err=>{
        console.warn(err.message)
      })
    }else{
      this.showCategories=false
    }
  }

  /*      TAGS 
    TAGS Funcionales  */
    
    removeTagsToBook(tag){
      this.listTags.splice(this.listTags.indexOf(tag),1);
    }
  
    addTagsToBook(tag){
      if(tag){
        if(this.listTags.indexOf(tag) < 0){
          this.listTags.push(tag);
        }else{
          console.log('este registro ya se encuentra en la lista')
        }
      }
    }
  
    getTags(tag){
      let termino:string = tag
      if(termino.length >= 3){
        this._serviceTags.getTagsByName(termino).subscribe((data:any)=>{
          this.showTags = true
          this.showTagsFound = data
        },err=>{
          console.warn(err.message)
        })
      }else{
        this.showTags=false
      }
    }
}
