import { Injectable } from '@angular/core';
import { EmployeeInfo } from './employee-info';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor() { 
  }

  info:EmployeeInfo = {
    date: new Date,
    orderNumber: "",
    installCrew: [],
    salesRep:"",
    salesRepContactNumber:"",
    custRefused:false
  }

  public submitData(data:any){
     this.info.date = new Date()
     this.info.orderNumber = data.orderNumber;
     this.info.salesRep = data.salesRep;
     this.info.salesRepContactNumber = data.salesRepContactNumber;
     this.info.installCrew = data.installCrew
     console.log(this.info)
  }

  public custRefusePrep(){
    this.info.custRefused = true;
    this.info.managerName = "";
    this.info.managerNumber = ""
    this.info.managerInstructions ="";
    this.info.managerProceed = false;
  }
}
