import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../step.service';
import { ValidDimService } from '../valid-dim.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {

  constructor(private valid:ValidDimService,
    private route:Router) { 
    valid.installObs.subscribe(install => {this.didInstall = install
       console.log(this.didInstall)})
    valid.removeObs.subscribe(remove =>  {this.didRemove = remove
      console.log(this.didRemove)})
  }

  didInstall!:boolean;
  didRemove!:boolean;
  

  ngOnInit(): void {
  }

  next()
  {
    if(this.valid.checkIfEverFalse) 
     this.route.navigate(['complete'])
     else 
     this.route.navigate(['customer-sign'])
      
  }

}
