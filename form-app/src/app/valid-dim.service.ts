import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DimensionService } from './dimension.service';
import { ImageHolderService } from './image-holder.service';

@Injectable({
  providedIn: 'root'
})
export class ValidDimService {

  constructor(private dimService:DimensionService, 
    private image:ImageHolderService) { }

  passInstall:boolean = false;
  passRemoval:boolean = false;
  neededRemoval:boolean = false;

  testObs = new BehaviorSubject(this.passInstall)
  testObs2 = new BehaviorSubject (this.passRemoval)

  installRequiredSigs: boolean = false;
  removeRequiredSigs:boolean = false;

  installObs = new BehaviorSubject(this.installRequiredSigs)
  removeObs = new BehaviorSubject(this.removeRequiredSigs)

  installEverFalse:boolean = false;
  checkIfEverNotValid:boolean = false;
  sigNumber:number = 0;
  custSig:number = 0;
  employeeSig: number = 0;

  checkValues(remove:boolean){
    if(remove) {
      var p = this.dimService.productRemoveDimArray
      var t = this.dimService.travelRemoveDimArray
      console.log('remove true')
    } else {
      console.log('remove false')
      p = this.dimService.productDimArray
      t = this.dimService.travelDimArray
    }
  
    var pWidth:number = 0;
    var pHeight:number = 0;
    var tWidth:number = 0;
    var tHeight:number = 0;
    var isValid:boolean = true;
   
      
      p.forEach(function(arrayItem) {
        var x = arrayItem.width
        var y = arrayItem.height
        if(!(pWidth > x)) pWidth = x
        if(!(pHeight > y)) pHeight= y
      })
      console.log('productarray',p)

      t.forEach(function(arrayItem) {
        var newValueWidth = arrayItem.width
        var newValueHeight = arrayItem.height
        if(!(tWidth < newValueWidth && tWidth != 0 )) tWidth = newValueWidth
        if(!(tHeight < newValueHeight && tHeight != 0)) tHeight= newValueHeight
      })
      console.log('travelarray', t)
   
    console.log(pWidth, tWidth, pHeight, tHeight)
    if(pWidth >= tWidth || pHeight >= tHeight) {
      console.log(pWidth, tWidth, pHeight, tHeight)
      isValid = false;
    }
    console.log(isValid)
    this.checkifEverFalse(isValid)
    this.checkState(isValid, remove)
    return isValid
  }

  private checkState(isValid:boolean, remove:boolean){
    console.log('checkstate')
      if(!isValid && !remove ) {
      this.image.needsInstall()
      this.installIncomplete()
      this.needInstallSigs()
    } else 
    if (isValid && !remove){
      this.installComplete()
      this.image.needsInstall()
      
    }
    if(!isValid && remove) {
      this.neededRemoval = true;
      this.image.needsRemove()
      this.removeIncomplete();
      this.needRemoveSigs();
    } else
     if (isValid && remove) {
      this.neededRemoval = true;
      this.image.needsRemove()
      this.sigNumber +=1
      this.custSig+= 1
    }
  }
  
  private checkifEverFalse(bool:boolean) {
    if(!bool) this.checkIfEverNotValid = true;
  }

  private needInstallSigs(){
    this.installObs.next(true)
    this.custSig += 2
    this.employeeSig += 1
    this.sigNumber += 3
  }
  private needRemoveSigs(){
    this.removeObs.next(true);
    this.custSig += 2
    this.employeeSig += 1
    this.sigNumber += 3
  }
  
   installComplete(){
    this.testObs.next(true);
    this.installObs.next(false)
   }
   removeComplete(){
     this.testObs2.next(true);
     this.removeObs.next(false);
   }
   installIncomplete(){
     this.testObs.next(false);
     this.installEverFalse = true;
   }
   removeIncomplete(){
     this.testObs2.next(false);
   }

}
