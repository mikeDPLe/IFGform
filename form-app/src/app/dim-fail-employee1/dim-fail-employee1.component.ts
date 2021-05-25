import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidDimService } from '../valid-dim.service';


@Component({
  selector: 'app-dim-fail-employee1',
  templateUrl: './dim-fail-employee1.component.html',
  styleUrls: ['./dim-fail-employee1.component.css']
})
export class DimFailEmployee1Component implements OnInit {

  constructor(private router: Router,
   private valid:ValidDimService) {
    this.valid.removeObs.subscribe(needsRemovesigs =>{
        this.isRemove = needsRemovesigs
      })
     this.valid.installObs.subscribe(needsInstallSigs => {
       this.isInstall = needsInstallSigs
     })
     }


  ngOnInit(): void {
  }
  showConfirm: Boolean = false;
  isInstall:boolean = false;
  isRemove: boolean = false;

  next(){
    console.log(this.isRemove)
    if(this.showConfirm){
      this.router.navigate(['customer-sign'])
    } else 
    this.showConfirm = true;
  }
  back(){
    this.showConfirm = false;
  }

}


