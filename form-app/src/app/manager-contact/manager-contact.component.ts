import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'manager-contact',
  templateUrl: './manager-contact.component.html',
  styleUrls: ['./manager-contact.component.css']
})
export class ManagerContactComponent implements OnInit {

  constructor(private empDetails:EmployeeDetailsService,
    private route:Router) { 
  
    }

  ngOnInit(): void {
  }
  step:number = 0 
  managerName = new FormControl("", [Validators.required]);
  managerContact = new FormControl("",  [Validators.required]);
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
      console.log(this.empDetails.info)
      this.route.navigate(['customer-sign'])
      break;
      default:
    }
  }

  saveData(){
    this.empDetails.info.managerName = this.managerName.value;
    this.empDetails.info.managerNumber = this.managerContact.value;
    this.empDetails.info.managerInstructions = this.managerResponse.value;
    
  }

}
