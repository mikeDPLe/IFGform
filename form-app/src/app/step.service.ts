import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EmployeeDetailsService } from './employee-details.service';
import { ValidDimService } from './valid-dim.service';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private route: Router,
    private emp: EmployeeDetailsService,
    private valid:ValidDimService) {
      this.$install = this.valid.testObs.subscribe(value => {console.log('testobs', value)})
      this.$remove = this.valid.testObs2.subscribe(value => {console.log('testobs2', value)})
     }

  currentStep:string = ""
  incrementTimes:number = 0
  isRemove!: boolean;
  isInstall!: boolean;
  $install:Subscription
  $remove:Subscription




  preInstall (){
    this.isInstall = true;
    console.log('install called');
  }
  preRemove() {
    this.isRemove = true;
    this.isInstall = false;
   
    console.log('remove called')
  }


  setStepRefuse(){
    this.emp.custRefusePrep();
    this.route.navigate(['cust-refuse']);
  }

  reloadComponent(hasParams?:string) {
    let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        if(hasParams)
        {
          this.route.navigate([hasParams])
        } else
        this.route.navigate([currentUrl]);
    }
  
}
