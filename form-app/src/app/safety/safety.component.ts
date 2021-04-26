import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.router.navigate(['dimension-form'],{skipLocationChange:true})
  }

}
