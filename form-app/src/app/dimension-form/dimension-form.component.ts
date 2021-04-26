import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { Dimensions } from '../classes/dimensions';


@Component({
  selector: 'app-dimension-form',
  templateUrl: './dimension-form.component.html',
  styleUrls: ['./dimension-form.component.css']
})
export class DimensionFormComponent implements OnInit {


  travelDimArray!: Array<Dimensions> 
  
  travelDim = {
    width: "",
    height: "",
  }

 
  
    
  constructor(private DimService:DimensionService, private router: Router) {
  }

  ngOnInit(): void {
    this.DimService.travelArray.subscribe(message => {this.travelDimArray = message; console.log(message)})
  }

  check() {
    this.DimService.pushDimensionArray(this.travelDimArray,this.travelDim.width,this.travelDim.height)
    this.DimService.setTravelArray(this.travelDimArray)
    this.router.navigate(["check-door"])
    }
  

 
}
