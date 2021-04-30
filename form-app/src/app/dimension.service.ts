import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dimensions } from './classes/dimensions';

@Injectable({
  providedIn: 'root'
})
export class DimensionService {

  travelDimArray: Array<Dimensions> = []
  private travelArraysubject = new BehaviorSubject(this.travelDimArray)
  travelArray = this.travelArraysubject.asObservable()

  productDimArray: Array<Dimensions> = []
  private productArraysubject = new BehaviorSubject(this.productDimArray)
  productArray = this.productArraysubject.asObservable()

  travelRemoveDimArray: Array<Dimensions> = []
  private travelRemoveArraysubject = new BehaviorSubject(this.travelRemoveDimArray)
  travelRemoveArray = this.travelRemoveArraysubject.asObservable()

  productRemoveDimArray: Array<Dimensions> = []
  private productRemoveArraysubject = new BehaviorSubject(this.productRemoveDimArray)
  productRemoveArray = this.productRemoveArraysubject.asObservable()

  constructor() { }
 
  setTravelArray(pArray:Array<Dimensions>){
    this.travelArraysubject.next(pArray)
   
  }

  setProductArray(pArray:Array<Dimensions>){
    this.productArraysubject.next(pArray)
  }

  useOldTravel() {
    this.travelRemoveDimArray = this.travelDimArray
    console.log('oldtravel called', this.travelRemoveDimArray)
  }
  setTravelRemoveArray (pArray:Array<Dimensions>){
    this.travelRemoveArraysubject.next(pArray)
  }

  setProductRemoveArray(pArray:Array<Dimensions>){
    this.productRemoveArraysubject.next(pArray)
  }

  createDimensionArray() {
    let newArray = new Array<Dimensions>()
    return newArray
  }

  pushDimensionArray(array:Array<Dimensions>, rawWidth:string, rawHeight:string){
    let dimParsed = new Dimensions(rawWidth,rawHeight)
    array.push(dimParsed)
    return array
  }

}
