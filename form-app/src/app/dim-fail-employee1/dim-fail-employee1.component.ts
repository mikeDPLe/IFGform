import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sigQueryParams } from '../sigParams';
import { StepService } from '../step.service';


@Component({
  selector: 'app-dim-fail-employee1',
  templateUrl: './dim-fail-employee1.component.html',
  styleUrls: ['./dim-fail-employee1.component.css']
})
export class DimFailEmployee1Component implements OnInit {

  constructor(private router: Router,
    private step:StepService) {
      if(this.step.currentStep == "c2") this.isRemove = true;
      console.log(this.step.currentStep)
     }


  ngOnInit(): void {
  }
  showConfirm: Boolean = false;
  isRemove: boolean = false;

  next(){
    console.log(this.isRemove)
    if(this.showConfirm && !this.isRemove){
      console.log('reeee')
      this.step.setStepOnDimFail()
      this.step.nextNavigate()
      this.step.incrementStep()
    } else
    this.showConfirm = true;
  }
  back(){
    this.showConfirm = false;
  }

}


