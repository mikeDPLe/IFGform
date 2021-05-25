import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageHolderService {

  constructor() { }

  needsInstallImages!:boolean 
  needsRemoveImages!:boolean 
  
  //contains string uri's of images
  installImage:Array<string> = []
  removeImage:Array<string> = []

  needsInstall(){
    this.needsInstallImages = true;
  }
  finishInstall(){
    this.needsInstallImages = false
  }
  needsRemove(){
    this.needsRemoveImages = true;
  }
  finishRemove(){
    this.needsRemoveImages = false;
  }

  saveInstall(array:Array<string>){
    this.installImage = array;
  }
  saveRemove(array:Array<string>){
    this.removeImage = array;
  }
  getInstallImages(){
    return this.installImage
  }
  getRemoveImage(){
    return this.removeImage
  }
}
