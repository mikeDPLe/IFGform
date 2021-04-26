import { Component, destroyPlatform, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { Dimensions } from '../classes/dimensions';;
import { ValidDimService } from '../valid-dim.service';
import { StepService } from '../step.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dimension-product',
  templateUrl: './dimension-product.component.html',
  styleUrls: ['./dimension-product.component.css']
})
export class DimensionProductComponent implements OnInit {

  constructor(private dimService:DimensionService, 
    private router:Router, 
    private checkService:ValidDimService, 
    private step:StepService) { 
      if(this.step.currentStep == "c2") this.isInstall = false; else this.isInstall = true;
    }

  productDimArray!:Array<Dimensions>
  productDim = {
    width:"",
    height:""
  }
  isInstall:boolean;
  $subscription! :Subscription

  ngOnInit(): void { 
    if(this.isInstall) {
      this.$subscription = this.dimService.productArray.subscribe(array => {this.productDimArray = array})
      console.log('product1')
    } else {
     this.$subscription = this.dimService.productRemoveArray.subscribe(array => {this.productDimArray = array})
     console.log('product2')
    }
  }


  check(){
    if(this.isInstall)
    {
    this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height)
    this.dimService.setProductArray(this.productDimArray)
    var result = this.checkService.checkValues()
    if(result){
      console.log('placeholder success',result)
    } else [
      this.router.navigate(["dim-fail"],{skipLocationChange:true})
    ]
    
  } else {
    console.log('hello')
    this.check2()
  }
  }
  check2(){
    this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height)
    this.dimService.setProductRemoveArray(this.productDimArray)
    var result = this.checkService.checkValues(true)
    if(result){
      console.log('placeholder success',result)
    } else [
      this.router.navigate(["dim-fail"],{skipLocationChange:true})
    ]
  }

}