import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private route: Router) { }

  currentStep:string = ""
  incrementTimes:number = 0

  setStepOnDimFail(){
    this.currentStep = "a1"
    console.log('currentstep set')
  }

  setStepProdRemove(){
    this.currentStep = "c0"
    console.log('set c0')
  }

  setStepRefuse(){
    this.currentStep = "r1"
  }

  incrementStep(){
    console.log('increment called')
    var v = this.currentStep
    var n = parseInt(v.replace(/(\D)/,""))
    var a = v.replace(/\d/,"")
    n = n + 1
    var c = a + n 
    this.currentStep = c;
    this.incrementTimes = this.incrementTimes + 1
  }


  nextNavigate(){
    var v = this.currentStep
    var result;
    switch (v) {
      case "a1":
      case "c3":
        result = "customer-sign"
        break;
      case "a2":
      result = "reload"
      break;
   // end of install product, prep remove     
      case "a3": 
        this.setStepProdRemove();
        result = "check-remove"
        break;
      case "d1":
        result = "proceed"
        break;  
      case "c0":
        result = "dimension-form"
        break;
      case "c2":
        result = "dimension-product"
        break;
      case "r1":
        result = "cust-refuse"
        break;
      default:
        result = "/"
    }
    console.log('result', result)
    if(result == "reload") {
      this.reloadComponent()
    } else {
      this.route.navigate([result])
    }
  }


  
  get step(){
    return this.currentStep
  }

  reloadComponent() {
    let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);
    }
  
}
