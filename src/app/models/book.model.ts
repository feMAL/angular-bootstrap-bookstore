export class Book {
    
    constructor(
        public title: String,
        public category: Array<Object>,
        public autor: Array<Object>,
        public briefDescription: String,
        public pages: Number,
        public isbn13: Number,
        public monthPublished: Number,
        public yearPublished: Number,
        public editorial: Array<Object>,
        public sinopsis: String,
        public linkAmazon: String,
        public linkCasadeLibro: String,
        public tags: Array<Object>,
        public comments?: Array<Object>,
        public imageFront?: String,
        public imageBack?: String,
        public fragment?: object
     ){ }
}