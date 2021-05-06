import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import {EmployeeInfo} from '../employee-info'

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor(empDetails:EmployeeDetailsService,
    private fb:FormBuilder,
    private route:Router) { 
    this.todaysDate = new Date()
  
  }
  
  empForm = this.fb.group({
    date: ['this.todaysDate.toString()'],
    orderNumber: [' ', Validators.required],
    salesRep:[' ', Validators.required],
    salesRepContactNumber:['', Validators.required],

    installCrew: this.fb.array([
      this.fb.control('') , Validators.required
    ])
  })
todaysDate:Date;


  get date (){
    return this.empForm.get('date')
  }
  get orderNumber(){
    return this.empForm.get('orderNumber')
  }
  get salesRep(){
    return this.empForm.get('salesRep')
  }
  get salesRepContactNumber(){
    return this.empForm.get('salesRepContactNumber')
  }

  get installCrew(){
    return this.empForm.get('installCrew') as FormArray;
  }
  addCrew(){
    this.installCrew.push(this.fb.control(''))
    this.empForm.controls
  }

  next(){
    this.route.navigate(['safety'])
  }

  ngOnInit(): void {
  }

}
