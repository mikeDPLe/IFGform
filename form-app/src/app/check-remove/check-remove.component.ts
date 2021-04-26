import { Component, OnInit } from '@angular/core';
import { DimensionService } from '../dimension.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-check-remove',
  templateUrl: './check-remove.component.html',
  styleUrls: ['./check-remove.component.css']
})
export class CheckRemoveComponent implements OnInit {

  constructor(private step:StepService, 
    private dim: DimensionService) { }
  showConfirm: Boolean = false;
  ngOnInit(): void {
  }


  yes(){
    if(this.showConfirm) {
      this.dim.useOldTravel();
      this.step.incrementStep();
      this.step.nextNavigate();
      console.log(this.step.currentStep)
    } else  this.showConfirm = true;
  }

  no(){
    if(!this.showConfirm) this.step.nextNavigate()
    this.step.nextNavigate();
  }
}
