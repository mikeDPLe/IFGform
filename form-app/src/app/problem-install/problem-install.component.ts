import { Component, OnInit } from '@angular/core';
import { DimensionService } from '../dimension.service';
import { SignatureHandlerService } from '../signature-handler.service';
import { StepService } from '../step.service';
import { ValidDimService } from '../valid-dim.service';

@Component({
  selector: 'problem-install',
  templateUrl: './problem-install.component.html',
  styleUrls: ['./problem-install.component.css']
})
export class ProblemInstallComponent implements OnInit {

  constructor(private valid:ValidDimService,
    private sig:SignatureHandlerService) { 
    this.valid.testObs.subscribe(install => this.isCompleteInstall = install)
    this.valid.testObs2.subscribe(remove => this.isCompleteRemove = remove)
    if(this.isCompleteInstall && this.isCompleteRemove) 
    {
      console.log('completetrue')
      this.isComplete = true;
    } else this.isComplete = false;
    
  }
    isCust:boolean = false;
    step:number = 0;
    isCompleteInstall:boolean = false;
    isCompleteRemove:boolean = false;
    isComplete:boolean;
    isFinalRemoveStep:boolean = false;

  ngOnInit(): void {
    this.isCust = this.sig.isCust
    this.step = this.sig.subStep
  }

}
