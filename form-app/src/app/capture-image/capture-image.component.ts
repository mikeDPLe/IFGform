import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PDFOptionList, values } from 'pdf-lib';
import { ImageHolderService } from '../image-holder.service';
import { StepService } from '../step.service';
import { ValidDimService } from '../valid-dim.service';

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.css']
})
export class CaptureImageComponent implements OnInit {

  constructor(private fb:FormBuilder, 
    private route:ActivatedRoute,
    private router:Router,
    private valid:ValidDimService,
    private step:StepService,
    private image:ImageHolderService) { }


 formGroup = this.fb.group({
 imageArray: this.fb.array([], [Validators.required])
 })

 needsInstallImages:boolean = false;
 needsRemoveImages:boolean = false
 uriHolder:Array<string> = [] 
 
 get imageArray(){
   return this.formGroup.get('imageArray') as FormArray;
 }

  showPreview(event: Event, index:number) {
    var file = (event.target as HTMLInputElement).files?.item(0)

    if (file) {
      // File Preview
      console.log(file)
      const reader = new FileReader();
      reader.onload = () => {
        this.uriHolder[index] = reader.result as string
      }
       reader.readAsDataURL(file)
      
    }
  }

  addImage(){
    this.imageArray.push(this.fb.control(['']))
  }

  removeImage(index:number){
    this.imageArray.removeAt(index)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.needsInstallImages = params.install;
        this.needsRemoveImages = params.remove;
      }
     console.log(this.needsRemoveImages)
     console.log(this.needsInstallImages)
    
    })
  }

  submit(){
    if(this.needsRemoveImages && !this.needsInstallImages)
    this.image.saveRemove(this.uriHolder)
    else
    if(this.needsInstallImages) 
    this.image.saveInstall(this.uriHolder)

    if(this.needsInstallImages && this.needsRemoveImages == true)
    { console.log(this.needsRemoveImages)
      this.step.reloadComponent('image')
      this.needsRemoveImages = true;
    } else
     if(this.valid.checkIfEverNotValid) 
     this.router.navigate(['complete'])
     else 
     this.router.navigate(['customer-sign'])
  }
    
}
