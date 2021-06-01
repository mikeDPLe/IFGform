import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from './employee-details.service';


@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private route: Router,
    private emp: EmployeeDetailsService) {
     }


  setStepRefuse(){
    this.emp.custRefusePrep();
    this.route.navigate(['cust-refuse']);
  }

  restart() {
    this.route.navigate(['emp-info'])
    this.reloadComponent()
  }

  reloadComponent(hasParams?:string) {
    let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        if(hasParams)
        {
          this.route.navigate([hasParams],{queryParams:{}})
        } else
        this.route.navigate([currentUrl]);
    }
  
}
