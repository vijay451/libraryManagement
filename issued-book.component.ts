import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books/books.service';
import { issuedBooksList } from '../shared/issuedBooksList.module';
import { UsersService } from '../users/users.service';
import { IssuedBookService } from './issued-book.service';

@Component({
  selector: 'app-issued-book',
  templateUrl: './issued-book.component.html',
  styleUrls: ['./issued-book.component.css']
  
})
export class IssuedBookComponent implements OnInit {
isError=false;
  list:any
bookList:any
issuedBookList:any
  


  

 


  constructor(private UsersService: UsersService, private BooksService: BooksService, private IssuedBookService: IssuedBookService)
  {}
  
 
  

 //issuedBookslist:issuedBooksList[] = [
  //  new issuedBooksList('aba','aaa','20')
  //]

userName='';
bookName='';
dummyInput:number;
  changeuser(event: any){
   this.userName=(event.target.value);
  }

  changebook(event: any){
    this.bookName=(event.target.value);
  }
  dummybook=this.bookName;
  
 

  quantityVal:number;
  
  bookNameImp:string[];
  quantityImp:number[];
  ngOnInit(): void {
    
    this.list= this.UsersService.getData();
    this.bookList= this.BooksService.getData();
    this.issuedBookList= this.IssuedBookService.getData();
   // this.BooksService.giveData(this.dummybook, this.dummyinput);
    
   
    //console.log(this.bookNameImp.length);
    //console.log(this.quantityImp)
   // console.log(this.quantityImp)
    
  }

  @ViewChild('inputValue',{static: false}) "inputRef" :ElementRef;
  
  
  addEvent(){
    const dummyUser = this.userName
    const dummyBook= this.bookName
    this. dummyInput= this.inputRef.nativeElement.value;
    this.bookNameImp= this.BooksService.getBookName();
    this.quantityImp= this.BooksService.getQuantity();
    
    //this.quantityImp= this.BooksService.getQuantity();
   // const newissuedBooksList = new issuedBooksList(dummyUser, dummyBook, dummyInput);
   // this.issuedBookslist.push(newissuedBooksList);
   
    //this.dummyinput=dummyInput;
   // this.BooksService.giveData(dummyBook, dummyInput);
  
   for(let i=0;i<this.bookNameImp.length;i++){
     if(this.bookNameImp[i]===dummyBook){
       if(this.quantityImp[i]>=this.dummyInput){
         this.isError=false;
         
        this.IssuedBookService.addNewEvent(dummyUser, dummyBook,this.dummyInput)
        
       }
      else{
        this.isError=true;
      }
     }
     
   }
   this.quantityVal=this.BooksService.pushData(dummyBook,this.dummyInput);
     
  }

  



}