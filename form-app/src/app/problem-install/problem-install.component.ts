import { Component, OnInit } from '@angular/core';
import { StepService } from '../step.service';

@Component({
  selector: 'problem-install',
  templateUrl: './problem-install.component.html',
  styleUrls: ['./problem-install.component.css']
})
export class ProblemInstallComponent implements OnInit {

  constructor(step:StepService) { 
    if(step.currentStep) 
      {
        this.showDiv = step.currentStep
      }
  }
    showDiv?:string


  ngOnInit(): void {
  }

}
