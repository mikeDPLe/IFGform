import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../../services/employee-details.service';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent  {

  constructor(private empDetails:EmployeeDetailsService,
    private fb:FormBuilder,
    private route:Router) { 
      this.empForm = this.fb.group({
        inputDate: [{value:new Date(), disabled:true}, [Validators.required]],
        orderNumber: ['', [Validators.required]], 
        salesRep:[(''), [Validators.required]],
        salesRepContactNumber:['',  [
          Validators.required,
          Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')
         ]],
        installCrew: this.fb.array([
          this.fb.control('', [Validators.required]) 
        ]),
      })
  }
  
    empForm:FormGroup 
  


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

  get inputDate(){
    return this.empForm.get('inputDate')
  }

  addCrew(){
    
    this.installCrew.push(this.fb.control(''))
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


  getErrorDate(){
    if(this.inputDate?.hasError('required')) {
      return 'Please select a date'
    }
    return 
  }
  getErrorOrder(){
    if(this.orderNumber?.hasError('required'))
    return 'Please type in an order number'
    return
  }
  getErrorSalesRep(){
    if(this.salesRep?.hasError('required'))
    return 'Please enter sales represenative name'
    return
  }
  getErrorSalesRepNumber(){
    if(this.salesRepContactNumber?.hasError('required')) {
      return 'Please enter sales rep contact number'
    }
  
    return this.salesRepContactNumber?.hasError('pattern') ? 'Not a valid phone number' :'';
  }

}
  