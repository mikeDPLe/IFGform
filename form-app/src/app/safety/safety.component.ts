import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../dimension.service';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private router: Router, private dim : DimensionService) { }

  ngOnInit(): void {
  }

  next() {
    this.dim.preInstall()
    this.router.navigate(['dimension-form'],{skipLocationChange:true})
  }

}
