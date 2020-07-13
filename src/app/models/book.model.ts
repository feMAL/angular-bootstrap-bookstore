import { Category } from './category.model'
import { Autor } from './autor.model'
import { Editorial } from './editorial.model'
import { Tag } from './tag.model'

export class Book {

    public _id             : string
    public title           : String
    public category        : Category[]
    public autor           : Autor[]
    public briefDescription: String
    public pages           : Number
    public isbn13          : Number
    public monthPublished  : Number
    public yearPublished   : Number
    public editorial       : Editorial[]
    public sinopsis        : String
    public linkAmazon      : String
    public linkCasadeLibro : String
    public tags            : Tag[]
    public comments?       : Array<Object>
    public imageFront?     : String
    public imageBack?      : String
    public fragment?       : object

    constructor( ){ }
}