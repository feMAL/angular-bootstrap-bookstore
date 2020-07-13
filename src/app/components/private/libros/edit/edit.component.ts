import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';
import { CategoryService } from 'src/app/services/category.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { TagsService } from 'src/app/services/tags.service';
import { Editorial } from 'src/app/models/editorial.model';
import { Tag } from 'src/app/models/tag.model';
import { Category } from 'src/app/models/category.model';
import { Autor } from 'src/app/models/autor.model';


@Component({
  selector: 'app-book-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css']
})
export class EditComponent implements OnInit {

  /*ATRIBUTOS DEL PROCESO ALTA LIBRO*/
  public book: Book
  
  public showAutorsFound
  public showAutors: Boolean = false
  public listAutors: Autor[] = []

  public showCategoriesFound
  public showCategories: Boolean = false
  public listCategories: Category[] = []
  
  
  public showEditorialFound
  public showEditorial: Boolean = false
  public listEditorial: Editorial[] = []

  public showTagsFound
  public showTags: Boolean = false
  public listTags: Tag[] = []

  // ATRIBUTOS DEL PROCESO POST ALTA

  public message: string
  public messageType: string

  public is_updated:Boolean = true


  constructor( 
    private _bookService: BookService,
    private _activeRoute: ActivatedRoute,
    private _serviceAutor: AutorService,
    private _serviceCategory: CategoryService,
    private _serviceEditorial: EditorialService,
    private _serviceTags: TagsService
    
  ) { 
    
    this.book= new Book();

    this._activeRoute.params.subscribe(params=>{

      this._bookService.getUniqueBook(params['id'])
        .subscribe((data:Book)=>{
          this.book = data
          
          this.listAutors = this.book.autor
          this.listCategories = this.book.category
          this.listEditorial = this.book.editorial
          this.listTags = this.book.tags
        },err=>{
          this.messageType = 'alert-danger'
          this.message = err.message
        })
    })
  }

  ngOnInit() {}

  
  updateUniqueBook(){

    if(this.listEditorial.length > 0 && this.listAutors.length > 0 && this.listCategories.length > 0 ){
      
      this.book.editorial = this.listEditorial
      this.book.autor = this.listAutors
      this.book.category = this.listCategories
      this.book.tags = this.listTags

      this._bookService.updateBook(this.book)
        .subscribe( (data: Book) => {
          this.messageType = 'alert-success'
          this.message = `El Libro ${data.title} ha sido actualizado`
        },err => {
          this.messageType = 'alert-danger'
          this.message = err.message
        })
    }
  }
  
  addAutorToBook(autor:Autor){
    if(autor){
      if(this.listAutors.indexOf(autor)<0){
        this.listAutors.push(autor);
      }else{
        console.log('este registro ya se encuentra en la lista')
      }
    }
  }
  
  removeAutorToBook(autor:Autor){
    this.listAutors.splice(this.listAutors.indexOf(autor),1);
  }

  getAutor(autor){
    let termino:string = autor
    if(termino.length >= 4){
      this.showAutors = true
      this._serviceAutor.getAutorsByName(termino)
        .subscribe((data:Autor[])=>{
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

  addEditorialToBook(editorial: Editorial){
    if(editorial){
      if(this.listEditorial.indexOf(editorial) < 0){
        this.listEditorial.push(editorial);
      }else{
        console.log('este registro ya se encuentra en la lista')
      }
    }
  }

  removeEditorialToBook(editorial: Editorial){
    this.listEditorial.splice(this.listEditorial.indexOf(editorial),1);
  }

  getEditorial(editorial){
    let termino:string = editorial
    if(termino.length >= 3){
      this._serviceEditorial.getEditorialByName(termino)
        .subscribe((data:Editorial[])=>{
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

  removeCategorieToBook(categories: Category){
    this.listCategories.splice(this.listCategories.indexOf(categories),1);
  }

  addCategorieToBook(categorie: Category){
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
      this._serviceCategory.getCategoryByName(termino)
        .subscribe((data:Category[])=>{
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
    
    removeTagsToBook(tag :Tag){
      this.listTags.splice(this.listTags.indexOf(tag),1);
    }
  
    addTagsToBook(tag: Tag){
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
        this._serviceTags.getTagsByName(termino)
          .subscribe((data:Tag[])=>{
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