  import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignatureInfo } from './classes/signature-info';
import { DimensionService } from './dimension.service';
import { StepService } from './step.service';
import { ValidDimService } from './valid-dim.service';

@Injectable({
  providedIn: 'root'
})
export class SignatureHandlerService {


  custSigArray: SignatureInfo[] = []
  employSigArray: SignatureInfo[] = []

  isCust: boolean = true 
  isEmployee: boolean = false;
  passInstallStatus:boolean = false;
  passRemoveStatus:boolean = false;
  finalRemoveStep:boolean = false;
 

  constructor(
    private router: Router,
    private step: StepService,
    private valid: ValidDimService) {
      this.valid.testObs.subscribe(x => this.passInstallStatus = x)
      this.valid.testObs2.subscribe(x => this.passRemoveStatus = x)
     }
    
  checkRepeat(){
    
    switch(this.checkStatus()){
      case 1: 
      if(!this.checkComplete()) 
      {
        this.step.reloadComponent()
      } else { 
        this.valid.testObs.next(true)
        this.router.navigate(['check-remove'])}
      break;
      case 2: if(!this.checkComplete())
      {
        this.checkIfRemoveFinal()
        this.step.reloadComponent()
      } else {
        this.valid.testObs2.next(true)
        this.router.navigate(['proceed'])}
        break;
      case 3: 
       this.router.navigate(['complete'])
    }
  }

  checkSigIsCust() {
    var v = this.checkCustStep() ? true : false
    return v
   }
 
   createSigInfo(uri: string, name: string) {
     var y = new SignatureInfo
     y.isCustomer = this.checkCustStep()
     y.isEmployee = this.checkEmpStep()
     y.step = this.checkStep()
     y.signatureImg = uri;
     y.name = name;
     return y
   }
 
   pushtoArray(siginfo: SignatureInfo) {
     console.log(siginfo)
     var returnCode: number;
     if (siginfo.isCustomer == true) {
       this.custSigArray.push(siginfo)
       returnCode = 1
     } else
       if (siginfo.isEmployee == true) {
         this.employSigArray.push(siginfo)
         returnCode = 2
       } else returnCode = 0
       console.log('cust', this.custSigArray)
       console.log('employ', this.employSigArray)
     return returnCode
   }
  private checkLength() {
    var v = this.custSigArray.length + this.employSigArray.length
    return v
   
  }
  private checkComplete() {
    if (this.checkLength() == this.valid.sigNumber) {
      return true
    } else
      return false
  }
  private checkStatus(){
    if(this.passInstallStatus && this.passRemoveStatus) return 3
    if(!this.passInstallStatus) return 1
    if(!this.passRemoveStatus) return 2
    return 0
  }
  private checkIfRemoveFinal(){
    if(!((this.valid.sigNumber % 2) == 0) && this.checkLength() == this.valid.sigNumber - 1 ) 
    {
      this.finalRemoveStep = true;
    }
  }
  private checkCustStep() {
    var result 
    if(this.checkLength() % 2 == 0) result = true;
    else result = false;
    if(this.passInstallStatus && this.passRemoveStatus)
    result = true;
    this.isCust = result;
    return result
  }
  private checkEmpStep() {
    var result;
    if(!(this.checkLength() % 2 == 0)) result = true
    else result = false;
    if(this.passInstallStatus && this.passRemoveStatus)
    result = false;
    this.isEmployee = result;
    return result;
  }
  private checkStep() {
    var person;
    var state;
    switch (this.checkStatus()) {
      case 1:
        state = 'install'
        break;
      case 2:
        state = 'remove'
        break
    }
    if(this.isCust) person = 'customer'
    else person = 'employee'
    if(this.passInstallStatus && this.passRemoveStatus)
    {
      state = "installFinal"
      person = "customer"
    }
    if(this.finalRemoveStep)
    {
      state = "removeFinal"
      person = "customer"
      this.finalRemoveStep = false;
    }
    return (person + "_" + state)
  }

}
