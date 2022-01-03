export class bookList{
   


    constructor(public ISBN:string, public bookName: string, public author: string, public publisher: string, public quantity: any,public issuedBook: number){
       this.ISBN= ISBN;
       this.bookName= bookName;
       this.author= author;
       this.publisher= publisher;
       this.quantity= quantity;
       this.issuedBook= issuedBook;
    }
}