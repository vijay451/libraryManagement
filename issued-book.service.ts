import { issuedBooksList } from "../shared/issuedBooksList.module";

export class IssuedBookService{


    issuedBookServiceList: issuedBooksList[]=[
        new issuedBooksList('aba','aaa','20')
    ]

    issuedBookInput:any;
    bookNameInput: any;
    addNewEvent(dummyUser:string, dummyBook:string,dummyInput:any){
        const newissuedBooksList = new issuedBooksList(dummyUser, dummyBook, dummyInput);
         this.issuedBookServiceList.push(newissuedBooksList);
         this.issuedBookInput= dummyInput;
         this.bookNameInput= dummyBook;
    }

   // getVal(){
     //   return this.issuedBookInput;
   // }

   // getBookVal(){
       // return this.bookNameInput;
   // }

    getData(){
        return this.issuedBookServiceList;
    }
}