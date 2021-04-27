import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-check-remove',
  templateUrl: './check-remove.component.html',
  styleUrls: ['./check-remove.component.css']
})
export class CheckRemoveComponent implements OnInit {

  constructor(private step:StepService, 
    private dim: DimensionService,
    private router: Router) { }
  showConfirm: Boolean = false;
  ngOnInit(): void {
  }


  yes(){
    if(this.showConfirm) {
      this.dim.preRemove()
      this.dim.useOldTravel();
      this.router.navigate(['dimension-product'])
      console.log(this.step.currentStep)
    } else  this.showConfirm = true;
  }

  no(){
    if(!this.showConfirm) this.router.navigate(['proceed'])
    else{
      this.dim.preRemove();
      this.router.navigate(['dimension-form'])
    } 
  }
}
