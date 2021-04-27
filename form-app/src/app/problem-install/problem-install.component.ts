import { Component, OnInit } from '@angular/core';
import { DimensionService } from '../dimension.service';
import { StepService } from '../step.service';

@Component({
  selector: 'problem-install',
  templateUrl: './problem-install.component.html',
  styleUrls: ['./problem-install.component.css']
})
export class ProblemInstallComponent implements OnInit {

  constructor(dim:DimensionService) { 
    if(dim.isInstall) 
      {
        this.isInstall = true; 
      } else this.isInstall = false;
  }
    isInstall:boolean;

  ngOnInit(): void {
  }

}
