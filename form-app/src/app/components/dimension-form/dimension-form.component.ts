import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../../services/dimension.service';
import { Dimensions } from '../../classes/dimensions';
import { ValidDimService } from '../../services/valid-dim.service';


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
  isInstall:boolean = false;
  checkDoor:boolean = false;
 
  
    
  constructor(private DimService:DimensionService, 
    private router: Router,
    private valid :ValidDimService) {
      this.valid.testObs.subscribe(passedInstall => this.isInstall = !passedInstall)
  }

  ngOnInit(): void {
  }

  check() {
    this.DimService.pushDimensionArray(this.travelDimArray, this.travelDim.width, this.travelDim.height)
    this.checkDoor = true;
    
  }
  yes(){
    this.checkDoor = false;
    this.travelDim.height = ""
    this.travelDim.width = ""
  }
  no(){
     if (!this.isInstall) {
       this.DimService.travelRemoveDimArray = this.travelDimArray
    } else {
      this.DimService.travelDimArray = this.travelDimArray 
    }
    this.router.navigate(["dimension-product"])
  }
  

 
}
