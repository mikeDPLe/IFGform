import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import {EmployeeInfo} from '../employee-info'

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  constructor(private empDetails:EmployeeDetailsService,
    private fb:FormBuilder,
    private route:Router) { 
    this.todaysDate = new Date()
  
  }
  
    empForm = this.fb.group({
    orderNumber: ['', Validators.required],
    salesRep:['', Validators.required],
    salesRepContactNumber:['', Validators.required],
    installCrew: this.fb.array([
      this.fb.control('',{validators:Validators.required}) 
    ]),
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
    console.log('poop')
    this.installCrew.push(this.fb.control('', {validators:Validators.required}))
  }

  next(formdata:FormGroup){
    this.empDetails.submitData(formdata);
    this.route.navigate(['safety'])
  }

  ngOnInit(): void {
  }

}
