export class Book {

    
    constructor(
        public title: String,
        public category: Array<Object>,
        public autor: Array<Object>,
        public tags: Array<Object>,
        public monthPublished: Number,
        public yearPublished: Number,
        public editorial: Object,
        public pages: Number,
        public isbn13: Number,
        public briefDescription: String,
        public sinopsis: String,
        public linkAmazon: String,
        public linkCasadeLibro: String,
        public fragment?: object,
        public comments?: Array<Object>,
        public imageFront?: String,
        public imageBack?: String
     ){ }
}