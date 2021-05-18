import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';


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
    orderNumber: ['', [Validators.required]], 
    salesRep:[(''), [Validators.required]],
    salesRepContactNumber:['',  [
      Validators.required,
      Validators.pattern('[- +()0-9]+')
     ]],
    installCrew: this.fb.array([
      this.fb.control('', [Validators.required]) 
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
    
    this.installCrew.push(this.fb.control(''))
    console.log(this.installCrew.length)
  }

  removeLastCrew(){
     const index = this.installCrew.length - 1
     this.installCrew.removeAt(index);
  }

  removeCrew(index: number){
     this.installCrew.removeAt(index);
  }

  next(formdata:FormGroup){
    this.empDetails.submitData(formdata);
    this.route.navigate(['safety'])
  }

  ngOnInit(): void {
  }

}
  