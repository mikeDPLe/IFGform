import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';
import { StepService } from '../step.service';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private router: Router, 
    private step:StepService) { }

  ngOnInit(): void {
  }

  next() {
    this.step.preInstall()
    this.router.navigate(['dimension-form'])
  }

}
