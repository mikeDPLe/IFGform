import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { SignatureInfo } from '../classes/signature-info';
import { StepService } from './step.service';
import { ValidDimService } from './valid-dim.service';

@Injectable({
  providedIn: 'root'
})
export class SignatureHandlerService {


  custSigArray: SignatureInfo[] = []
  employSigArray: SignatureInfo[] = []

  subStep: number = 0;
  isCust: boolean = true
  isEmployee: boolean = false;
  passInstallStatus: boolean = false;
  passRemoveStatus: boolean = false;


  completeCustSig: boolean = false;
  completeEmpSig: boolean = false;

  constructor(
    private router: Router,
    private step: StepService,
    private valid: ValidDimService
    ) {
    this.valid.testObs.subscribe(x => this.passInstallStatus = x)
    this.valid.testObs2.subscribe(x => this.passRemoveStatus = x)

  }

  //call to update state with valid service
  checkDiff() {
    const custDiff = this.getCustArrayDiff()
    const empDiff = this.getEmpArrayDiff()
    if (!(this.passInstallStatus && this.passRemoveStatus)) {
      var cust = this.checkCust(custDiff, empDiff)
    } else cust = true;
    var step = this.checkStep1(custDiff, empDiff)
    this.subStep = step;
    this.isCust = cust;
  }
  checkRepeat() {
    switch (this.checkStatus()) {
      case 1:
        if (!this.checkComplete()) {
          this.step.reloadComponent()
        } else {
          this.valid.installComplete()
          this.router.navigate(['check-remove'])
        }
        break;
      case 2: if (!this.checkComplete()) {
        this.step.reloadComponent()
      } else {
        this.valid.removeComplete()
        this.router.navigate(['proceed'])
      }
        break;
      case 3:
        this.router.navigate(['complete'])
    }
  }

  checkSigIsCust() {
    var v = this.checkCustStep() ? true : false
    return v
  }

  createSigInfo(uri: string, name: string, date:Date) {
    var y = new SignatureInfo
    y.date = date;
    y.isCustomer = this.isCust
    y.isEmployee = !this.isCust
    y.step = this.checkStep()
    y.signatureImg = uri;
    y.name = name;
    return y
  }

  pushtoArray(siginfo: SignatureInfo) {
    var returnCode: number;
    if (siginfo.isCustomer == true) {
      this.custSigArray.push(siginfo)
      returnCode = 1
    } else
      if (siginfo.isEmployee == true) {
        this.employSigArray.push(siginfo)
        returnCode = 2
      } else returnCode = 0
    return returnCode
  }
  private getCustArrayDiff() {
    var result = this.valid.custSig - this.custSigArray.length
    return result
  }
  private getEmpArrayDiff() {
    var result = this.valid.employeeSig - this.employSigArray.length
    return result
  }

  private checkCust(custDiff: number, empDiff: number) {
    if (custDiff > empDiff) return true
    if (custDiff == empDiff) return false
    if (custDiff < empDiff) return true
    return false
  }
  private checkStep1(custDiff: number, empDiff: number) {
    var result = 0
    if (custDiff > empDiff || custDiff == empDiff) result = 1
    if (custDiff > empDiff && empDiff == 0) result = 2
    return result
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
  private checkStatus() {
    if (this.passInstallStatus && this.passRemoveStatus) return 3
    if (!this.passInstallStatus) return 1
    if (!this.passRemoveStatus) return 2
    return 0
  }

  private checkCustStep() {
    var result
    if (this.checkLength() % 2 == 0) result = true;
    else result = false;
    if (this.passInstallStatus && this.passRemoveStatus)
      result = true;
    this.isCust = result;
    return result
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
    if (this.isCust) person = 'customer'
    else person = 'employee'
    if (this.passInstallStatus && this.passRemoveStatus) {
      this.isCust = true;
      this.isEmployee = false;
      state = "installFinal"
      person = "customer"
      return   person + "_" + state
    }
    return (person + "_" + state + this.subStep)
  }

}
