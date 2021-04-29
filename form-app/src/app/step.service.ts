import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidDimService } from './valid-dim.service';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private route: Router,
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
    this.isRemove = false;
    console.log('install called')
  }
  preRemove() {
    this.isInstall = false;
    this.isRemove = true;
   
    console.log('remove called')
  }


  setStepRefuse(){
    this.route.navigate(['cust-refuse'])
  }

  reloadComponent() {
    let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
    }
  
}
