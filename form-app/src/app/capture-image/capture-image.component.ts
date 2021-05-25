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
    private router:Router,
    private valid:ValidDimService,
    private step:StepService,
    private image:ImageHolderService) { 
      this.needsInstallImages = image.needsInstallImages
      this.needsRemoveImages = image.needsRemoveImages
    }


 formGroup = this.fb.group({
 imageArray: this.fb.array([], [Validators.required])
 })


 needsInstallImages:boolean 
 needsRemoveImages:boolean 
 uriHolder:Array<string> = [] 
 
 get imageArray(){
   return this.formGroup.get('imageArray') as FormArray;
 }

  showPreview(event: Event, index:number) {
    var file = (event.target as HTMLInputElement).files?.item(0)
    var control =   event.target as HTMLInputElement
    control.style.visibility = 'hidden'
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
   }


  submit(){
    if(this.needsInstallImages && this.needsRemoveImages)
    { 
      this.image.finishInstall()
      this.image.saveInstall(this.uriHolder)
      this.step.reloadComponent('image')
      return
    }
    if(this.needsRemoveImages) {
      this.image.finishRemove()
      this.image.saveRemove(this.uriHolder)
    }
    if(this.needsInstallImages) {
      this.image.finishInstall()
      this.image.saveInstall(this.uriHolder)
    }
     if(this.valid.installEverFalse) 
     this.router.navigate(['complete'])
     else 
     this.router.navigate(['customer-sign'])
  }
    
}
