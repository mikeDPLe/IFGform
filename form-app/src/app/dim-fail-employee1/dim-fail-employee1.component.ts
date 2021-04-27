import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { sigQueryParams } from '../sigParams';
import { StepService } from '../step.service';


@Component({
  selector: 'app-dim-fail-employee1',
  templateUrl: './dim-fail-employee1.component.html',
  styleUrls: ['./dim-fail-employee1.component.css']
})
export class DimFailEmployee1Component implements OnInit {

  constructor(private router: Router,
    private dim :DimensionService) {
      if(this.dim.isRemove) this.isRemove = true;
     }


  ngOnInit(): void {
  }
  showConfirm: Boolean = false;
  isRemove: boolean = false;

  next(){
    console.log(this.isRemove)
    if(this.showConfirm && !this.isRemove){
      this.router.navigate(['customer-sign'])
    } else
    this.showConfirm = true;
  }
  back(){
    this.showConfirm = false;
  }

}


