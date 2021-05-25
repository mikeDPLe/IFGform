import { Component, destroyPlatform, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { Dimensions } from '../classes/dimensions';
import { ValidDimService } from '../valid-dim.service';


@Component({
  selector: 'app-dimension-product',
  templateUrl: './dimension-product.component.html',
  styleUrls: ['./dimension-product.component.css']
})
export class DimensionProductComponent implements OnInit {

  constructor(private dimService: DimensionService,
    private router: Router,
    private checkService: ValidDimService
  ) {
    checkService.testObs.subscribe(passedInstall => {
      this.isInstall = !passedInstall
      console.log('isinstall', this.isInstall)
    })

  }

  productDimArray:Array<Dimensions> = []
  productDim = {
    width:"",
    height:""
  }
  isInstall!:boolean;
 

  ngOnInit(): void { 
  }


  check() {
    if (this.isInstall) {
      this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height)
      this.dimService.productDimArray = this.productDimArray
      console.log('dimservice product', this.dimService.productDimArray)
      var result = this.checkService.checkValues(false)
      if (result) {
        this.router.navigate(["check-remove"])
      } else[
        this.router.navigate(["dim-fail"])
      ]

    } else {
      console.log('hello')
      this.check2()
    }
  }
  check2(){
    this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height)
    this.dimService.productRemoveDimArray = this.productDimArray
    var result = this.checkService.checkValues(true)
    if(result){
      console.log('placeholder success',result)
      this.router.navigate(["proceed"])
    } else [
      this.router.navigate(["dim-fail"])
    ]
  }
}
