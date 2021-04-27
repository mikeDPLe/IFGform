import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../step.service';

@Component({
  selector: 'app-check-door',
  templateUrl: './check-door.component.html',
  styleUrls: ['./check-door.component.css']
})
export class CheckDoorComponent implements OnInit {

  constructor(private step:StepService, private route: Router) { }

  ngOnInit(): void {
  }

  next(){
      this.route.navigate(['dimension-product'])
     }
  }

