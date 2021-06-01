import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'manager-contact',
  templateUrl: './manager-contact.component.html',
  styleUrls: ['./manager-contact.component.css']
})
export class ManagerContactComponent {

  constructor(private empDetails:EmployeeDetailsService,
    private route:Router) { 
  
    }


  step:number = 0 
  unableContact:boolean = false;
  managerName = new FormControl("", [Validators.required]);
  managerContact = new FormControl("",  
  [Validators.required,  
  Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')]);
  managerResponse = new FormControl("",  [Validators.required]);


  proceed(){
    switch(this.step)
    {
      case 0:
      this.step = 1;
      break;
      case 1: 
      this.step = 2;
      break;
      case 2:
      this.step = 3;
      break;
      case 3:
      this.saveData()
      this.empDetails.info.managerProceed = true;
      this.route.navigate(['customer-sign'])
      break;
      default:
    }
  }

  no(){
    this.unableContact = true;
  }

  saveData(){
    this.empDetails.info.managerName = this.managerName.value;
    this.empDetails.info.managerNumber = this.managerContact.value;
    this.empDetails.info.managerInstructions = this.managerResponse.value;
    
  }

  //template error functions

  getErrorManagerName(){
    if(this.managerName.hasError('required'))
    return "Please enter the name of the manager"
    return
  }
  getErrorManagerContact(){
    if(this.managerContact.hasError('required'))
    return "Please enter manager's phone number"

    return this.managerContact.hasError('pattern') ? 'Not a valid phone number' : ''
  }
  getErrorManagerResponse(){
    if(this.managerResponse.hasError('required'))
    return "Please enter a short summary of your conversation."
    return
  }

}
