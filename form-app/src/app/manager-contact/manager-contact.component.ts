import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-manager-contact',
  templateUrl: './manager-contact.component.html',
  styleUrls: ['./manager-contact.component.css']
})
export class ManagerContactComponent implements OnInit {

  constructor(private empDetails:EmployeeDetailsService) { }

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
      default:
    }
  }

}
