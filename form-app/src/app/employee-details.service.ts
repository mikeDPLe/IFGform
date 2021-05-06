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
}
