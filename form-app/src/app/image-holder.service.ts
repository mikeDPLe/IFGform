import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHolderService {

  constructor() { }
  
  //contains string uri's of images
  installImage:Array<string> = []
  removeImage:Array<string> = []

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
