




import { serviceList } from "../shared/list.module";

export class UsersService {


  getData(){
    return this.servicelist;


}

  //const newList = new List(dummyUserName, dummyEmail, dummyAdress, dummyCity, dummyContactNo);
    servicelist:serviceList[] = [
        new serviceList("avihat","Ss","dd","dd","dd"),
        new serviceList("vijya","Ss","dd","dd","dd")
      ]

      addNewElement(dummyUserName:string,dummyEmail:string,dummyAdress:string,dummyCity:string,dummyContactNo:string){
        const newList = new serviceList(dummyUserName, dummyEmail, dummyAdress, dummyCity, dummyContactNo);
        this.servicelist.push(newList);
      }
      
      deleteElement(i:any){
        this.servicelist.splice(i,1);
      }
      
      editElement(i:any){
        this.servicelist.splice(i,1);
        
        
      }

    
}

