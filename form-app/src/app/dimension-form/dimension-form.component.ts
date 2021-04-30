import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { Dimensions } from '../classes/dimensions';
import { StepService } from '../step.service';


@Component({
  selector: 'app-dimension-form',
  templateUrl: './dimension-form.component.html',
  styleUrls: ['./dimension-form.component.css']
})
export class DimensionFormComponent implements OnInit {


  travelDimArray: Array<Dimensions>  = []
  
  travelDim = {
    width: "",
    height: "",
  }
  isInstall:boolean;
  checkDoor:boolean = false;
 
  
    
  constructor(private DimService:DimensionService, 
    private router: Router,
    private step:StepService) {
    if(!this.step.isInstall) this.isInstall = false;
    else this.isInstall = true;
    
  }

  ngOnInit(): void {
    console.log("poopp",this.DimService.travelDimArray)

  }

  check() {
    this.DimService.pushDimensionArray(this.travelDimArray, this.travelDim.width, this.travelDim.height)
    // if (!this.isInstall) {
    //   this.DimService.setTravelArray(this.travelDimArray)
    // } else {
    //   this.DimService.setTravelRemoveArray(this.travelDimArray)
    // }
    // this.router.navigate(["check-door"])
    this.checkDoor = true;
    console.log(this.travelDimArray)
  }
  yes(){
    this.checkDoor = false;
    this.travelDim.height = ""
    this.travelDim.width = ""
    console.log('ree')
  }
  no(){
     if (!this.isInstall) {
       this.DimService.travelRemoveDimArray = this.travelDimArray
      // this.DimService.setTravelRemoveArray(this.travelDimArray)
      // this.DimService.setTravelArray(this.travelDimArray)
    } else {
      this.DimService.travelDimArray = this.travelDimArray 
    }
    console.log('no called',this.DimService.travelDimArray)
    this.router.navigate(["dimension-product"])
  }
  

 
}
