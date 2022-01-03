import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { serviceList } from '../shared/list.module';
import { Users } from '../users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {

  constructor(private UsersService: UsersService) { }


  model: Users = new Users();
  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
    this.list = this.UsersService.getData();
  }
 list: any
 // list:serviceList[] = [
   // new serviceList('aba','aaa','aaa','aaa','aaa')
  //]


  @ViewChild('userForm', { static: false }) "signupForm": NgForm;


  @ViewChild('userNameValue',{static: false}) "userNameRef" :ElementRef;
  @ViewChild('emailValue',{static: false}) "emailRef": ElementRef;
  @ViewChild('addressValue',{static: false}) "addressRef" :ElementRef;
  @ViewChild('cityValue',{static: false}) "cityRef": ElementRef;
  @ViewChild('contactNoValue',{static: false}) "contactNoRef" :ElementRef;
 
  
  
 



  addEvent(){
    const dummyUserName = this.userNameRef.nativeElement.value;
    const dummyEmail= this.emailRef.nativeElement.value;
    const dummyAdress = this.addressRef.nativeElement.value;
    const dummyCity= this.cityRef.nativeElement.value;
    const dummyContactNo = this.contactNoRef.nativeElement.value;
  
    //const newList = new serviceList(dummyUserName, dummyEmail, dummyAdress, dummyCity, dummyContactNo);
   // this.list.push(newList);
   this.UsersService.addNewElement(dummyUserName,dummyEmail,dummyAdress,dummyCity,dummyContactNo);
  
  }


  delete(i: number){
   // this.list.splice(i,1);
   this.UsersService.deleteElement(i);
     }
  
     edit(i:number,userNamee:string,emaill:string, addresss: string, cityy: string, contactNoo: string){
      
     this.signupForm.setValue({
       userName: userNamee,
       email: emaill,
       address: addresss,
       city: cityy,
       contactNo: contactNoo
     });
     //this.list.splice(i,1);
     this.UsersService.editElement(i);
      }
}



