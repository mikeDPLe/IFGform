import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent {

  constructor(private router: Router, 
    ) { }

    showConfirm:boolean = false;



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
