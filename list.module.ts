export class serviceList{
   


    constructor(public userName:string, public email: string, public address: string, public city: string, public contactNo: string){
       this.userName = userName;
       this.email = email;
       this.address= address;
       this.city= city;
       this.contactNo= contactNo;
    }
}