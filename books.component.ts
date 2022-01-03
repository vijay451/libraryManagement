import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IssuedBookService } from '../issued-book/issued-book.service';

import { bookList } from '../shared/bookList.module';
import { User } from '../user';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  
})
export class BooksComponent implements OnInit {
  dummyBook11:any;
  dummyInput11:any;
  constructor(private BooksService: BooksService, private IssuedBookService: IssuedBookService) { }
  
  model: User = new User();
  onSubmit() {
    console.log(this.model);
  }
 
 isEdit=false;
 
  ngOnInit(): void {
    this.booklist = this.BooksService.getData();
   
   // for(let i=0;i<this.booklist.length;i++){
     // this.booksArr.push(this.booklist[i].bookName);
     // this.quantityArr.push(this.booklist[i].quantity);
  //  }
    //console.log(this.booksArr)
    //console.log(this.quantityArr)
    //this.dummyBook11=this.BooksService.getData2();
   // this.dummyInput11=this.BooksService.getData3();
    //console.log(this.dummyInput11)
    //for (let i = 0; i < this.booklist.length; i++) {
      //console.log(this.booklist[i].bookName);
     // if(this.dummyBook1===this.booklist[i].bookName){
      //  console.log(this.booklist[i].bookName);
     // }
   // }
  // this.BooksService.giveData(this.booksArr,this.quantityArr);
  }

  
  




  @ViewChild('userForm', { static: false }) "signupForm": NgForm;
  @ViewChild('isbnValue',{static: false}) "isbnRef" :ElementRef;
  @ViewChild('booknameValue',{static: false}) "booknameRef": ElementRef;
  @ViewChild('authorValue',{static: false}) "authorRef" :ElementRef;
  @ViewChild('publisherValue',{static: false}) "publisherRef": ElementRef;
  @ViewChild('quantityValue',{static: false}) "quantityRef" :ElementRef;

 
  booklist:any;
  //booklist:bookList[] = [
   // new bookList('aba','aaa','aaa','aaa','aaa')
 // ]
 
  




  addEvent(){
    const dummyIsbn = this.isbnRef.nativeElement.value;
    const dummyBookname= this.booknameRef.nativeElement.value;
    const dummyAuthor = this.authorRef.nativeElement.value;
    const dummyPublisher= this.publisherRef.nativeElement.value;
    const dummyQuantity = this.quantityRef.nativeElement.value;
    const dummyIssuedBook= 0;
    this.isEdit=false;
    //const newbookList = new bookList(dummyIsbn, dummyBookname, dummyAuthor, dummyPublisher, dummyQuantity);
    //this.booklist.push(newbookList);
    this.BooksService.addNewElement(dummyIsbn,dummyBookname,dummyAuthor,dummyPublisher,dummyQuantity,dummyIssuedBook);
  }

  updateEvent(){
    const dummyIsbn = this.isbnRef.nativeElement.value;
    const dummyBookname= this.booknameRef.nativeElement.value;
    const dummyAuthor = this.authorRef.nativeElement.value;
    const dummyPublisher= this.publisherRef.nativeElement.value;
    const dummyQuantity = this.quantityRef.nativeElement.value;
    const dummyIssuedBook= this.BooksService.getEditBook();
    this.BooksService.addNewElement(dummyIsbn,dummyBookname,dummyAuthor,dummyPublisher,dummyQuantity,dummyIssuedBook);
  }
  
    
  
  
 
 

  
  delete(i: number){
    //this.booklist.splice(i,1);
    this.BooksService.deleteElement(i);
     }
  
     edit(i:number,ISBNN:string,bookNamee:string, authorr: string, publisherr: string, quantityy: string){
    this.isEdit=true;
     this.signupForm.setValue({
       ISBN: ISBNN,
       bookName: bookNamee,
       author: authorr,
       publisher: publisherr,
       quantity: quantityy
     });
    
    
     //this.booklist.splice(i,1);
     this.BooksService.editElement(i);
      }

     

      
}




