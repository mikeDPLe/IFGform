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
    valid.removeObs.subscribe(remove => this.didRemove = remove)
  }

  didInstall!:boolean;
  didRemove!:boolean;
  needStagger!:boolean;

  ngOnInit(): void {
    if(this.didInstall && this.didRemove)
    this.needStagger = true;
    else this.needStagger = false;
  }

  next()
  {
    if(this.needStagger){
      this.needStagger = false;
    }
      else {
        this.route.navigate(['customer-sign'])
      }
  }

}
