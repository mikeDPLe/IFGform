import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { SignatureInfo } from './classes/signature-info';
import { StepService } from './step.service';

@Injectable({
  providedIn: 'root'
})
export class SignatureHandlerService {


  custSigArray: SignatureInfo[] = []
  employSigArray: SignatureInfo[] = []
  constructor(private step: StepService) { }

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
    var v = this.step.currentStep
    console.log(v)
    var result;
    switch (v) {
      case "a2":
        result = true;
        break;
      case "a3":
        result = false;
        break;
      default:
        result = false;
    }
    return result
  }
  private checkEmpStep() {
    var v = this.step.currentStep
    var result;
    switch (v) {
      case "a2":
        result = false;
        break;
      case "a3":
        result = true;
        break;
      default:
        result = false;
    }
    return result
  }

  private checkStep() {
    var v = this.step.currentStep
    var result;
    switch (v) {
      case "a2":
        result = "custAcknowledge"
        break;
      case "a3":
        result = "empAcknowledge"
        break;
      default:
        result = "unknown"
    }
    return result;
  }

}
