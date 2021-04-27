import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { SignatureInfo } from './classes/signature-info';
import { DimensionService } from './dimension.service';
import { StepService } from './step.service';

@Injectable({
  providedIn: 'root'
})
export class SignatureHandlerService {


  custSigArray: SignatureInfo[] = []
  employSigArray: SignatureInfo[] = []

  isCust: boolean = true 
  isEmployee: boolean = false;
  constructor(private dim: DimensionService,
    private router: Router,
    private step: StepService) { }

  checkRepeat(){
    if(this.custSigArray.length !=1 || this.employSigArray.length !=1 )
    this.step.reloadComponent()
    else {
        if (this.dim.isInstall) {
        this.router.navigate(['check-remove'])
        
      } else {
        this.router.navigate(['proceed'])
      }
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

  private checkCustStep() {
    var result 
    if(this.custSigArray.length < 1) result = true;
    else result = false;
    this.isCust = result;
    return result
  }
  private checkEmpStep() {
    var result;
    if(this.employSigArray.length < 1 && this.custSigArray.length > 0) result = true
    else result = false;
    this.isEmployee = result;
    return result;
  }

  private checkStep() {
    var person;
    var state;
    if(this.dim.isRemove) state = 'remove'
    else state = 'install';
    if(this.isCust) person = 'customer'
    else person = 'employee'
    return (person + " " + state)
  }

}
