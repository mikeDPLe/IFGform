import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { StepService } from '../step.service';
import { ValidDimService } from '../valid-dim.service';

@Component({
  selector: 'app-check-remove',
  templateUrl: './check-remove.component.html',
  styleUrls: ['./check-remove.component.css']
})
export class CheckRemoveComponent implements OnInit {

  constructor(private step:StepService, 
    private dim: DimensionService,
    private router: Router,
    private valid: ValidDimService,
    
 ) { 
    //  state.checkStateInstall()
    //  this.checkInstall = this.state.passInstall
    }
  showConfirm: Boolean = false;
  ngOnInit(): void {
  }
  // checkInstall: boolean;

  yes(){
    if(this.showConfirm) {
     this.dim.useOldTravel();
      this.router.navigate(['dimension-product'])
    } 
     this.showConfirm = true;
  }

  no(){
    if(!this.showConfirm){
     this.valid.testObs2.next(true);
     this.router.navigate(['proceed'])
    }else{
      this.valid.neededRemoval = true;
      this.router.navigate(['dimension-form'])
    } 
  }
}
