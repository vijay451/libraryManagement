
import { bookList } from "../shared/bookList.module";

export class BooksService {

  
  
  getData(){
    return this.booksServiceList;
}

 
  //const newList = new List(dummyUserName, dummyEmail, dummyAdress, dummyCity, dummyContactNo);
    booksServiceList:bookList[] = [
       new bookList("aa","vijga","aaa","aaa",8,0),
       new bookList("aaa","acb","aaa","aaa",20,0)
      ]
      editIssuedBook:number;
      issuedBooKVal:number;
      bookNameVal:any;
     bookNameExp:any=[];
     quantityExp: any=[];
      integer:any;
   //  giveData(booksArr:any[],quantityArr:any[]){
      //this.bookNameExp=booksArr;
      //this.quantityExp=quantityArr;
     //}
     getEditBook(){
       return this.editIssuedBook;
     }
    
      addNewElement(dummyISBN:string,dummyBookname:string,dummyAuthor:string,dummyPublisher:string,dummyQuantity:any,dummyIssuedBook: number){
        const newserviceList = new bookList(dummyISBN, dummyBookname, dummyAuthor, dummyPublisher, dummyQuantity,dummyIssuedBook);
        this.booksServiceList.push(newserviceList);
       // this.bookNameExp= dummyBookname;
       // this.quantityExp= dummyQuantity;
      }
      
      deleteElement(i:any){
       this.booksServiceList.splice(i,1);
      }
      
     editElement(i:any){
       this.booksServiceList.splice(i,1);
       
        
      }
     
      getBookName(){
       this.bookNameExp=[];
        for(let i=0;i<this.booksServiceList.length;i++){
          this.bookNameExp.push(this.booksServiceList[i].bookName);
         
        }
        return this.bookNameExp;
      }
        
      getQuantity(){
        this.quantityExp=[];
        for(let i=0;i<this.booksServiceList.length;i++){
          this.quantityExp.push(this.booksServiceList[i].quantity);
         
        }
        return this.quantityExp;
      }

      pushData(dummyBook:string, dummyInput:number){
        this.integer = dummyInput;
        this.issuedBooKVal= parseInt(this.integer, 10);
        this.bookNameVal= dummyBook;
      for(let i=0;i<this.booksServiceList.length;i++){
        if(this.bookNameVal===this.booksServiceList[i].bookName){
          if(this.booksServiceList[i].quantity>=this.issuedBooKVal){
          this.booksServiceList[i].issuedBook= this.issuedBooKVal+this.booksServiceList[i].issuedBook;
          this.booksServiceList[i].quantity=this.booksServiceList[i].quantity-this.issuedBooKVal;
          this.editIssuedBook=this.booksServiceList[i].issuedBook;
            }
            else{
              return this.booksServiceList[i].quantity;
            }
          }
    }
      }

     
     

     
    } 
