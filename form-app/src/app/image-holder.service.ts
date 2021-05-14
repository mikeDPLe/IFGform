import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHolderService {

  constructor() { }

  installImage:Array<string> = []
  removeImage:Array<string> = []

  saveInstall(array:Array<string>){
    this.installImage = array;
  }
  saveRemove(array:Array<string>){
    this.removeImage = array;
  }
}
