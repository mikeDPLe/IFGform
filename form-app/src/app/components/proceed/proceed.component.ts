import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageHolderService } from '../../services/image-holder.service';
import { ValidDimService } from '../../services/valid-dim.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {

  constructor(private valid:ValidDimService,
    private route:Router, 
    private image:ImageHolderService) { 
    valid.testObs.subscribe(install => {this.didInstall = install
       })
     valid.removeObs.subscribe(neededSig => {
       this.didRemove = neededSig
     })  
      this.needRemoval= valid.neededRemoval 
   
  }

  needRemoval: boolean;
  didInstall!:boolean;
  didRemove!:boolean;
  needRemoveImage!:boolean;
  needInstallImage!:boolean;

  ngOnInit(): void {
    this.needInstallImage = this.image.needsInstallImages
    this.needRemoveImage = this.image.needsRemoveImages
  }

  next()
  {
    if(this.image.needsInstallImages || this.image.needsRemoveImages)
    this.route.navigate(['image']) 
    else if(this.valid.installEverFalse == false){
      this.route.navigate(['customer-sign'])
    } else 
    this.route.navigate(['complete'])
  }
}
