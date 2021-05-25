import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../step.service';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private router: Router, 
    private step:StepService) { }

    showConfirm:boolean = false;

  ngOnInit(): void {
  }

  next() {
    if(!this.showConfirm){
      this.showConfirm = true;
    } else {
      this.router.navigate(['dimension-form'])
    }
  }
  back(){
    if(this.showConfirm){
      this.showConfirm = false;
    }
  }

}
