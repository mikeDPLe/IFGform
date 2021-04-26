import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';

@Injectable({
  providedIn: 'root'
})
export class ValidDimService {

  constructor(private dimService:DimensionService) { }

  checkValues(remove?:boolean){
    if(remove) {
      var p = this.dimService.productRemoveArray
      var t = this.dimService.travelRemoveArray
      console.log('remove true')
    } else {
      console.log('remove false')
      p = this.dimService.productArray
      t = this.dimService.travelArray
    }
  
    var pWidth:number = 0;
    var pHeight:number = 0;
    var tWidth:number = 0;
    var tHeight:number = 0;
    var isValid:boolean = true;
    p.subscribe(array => {
      
      array.forEach(function(arrayItem) {
        var x = arrayItem.width
        var y = arrayItem.height
        if(!(pWidth > x)) pWidth = x
        if(!(pHeight > y)) pHeight= y
      })
      console.log('productarray',array)
    })
   t.subscribe(array => {

      array.forEach(function(arrayItem) {
        var newValueWidth = arrayItem.width
        var newValueHeight = arrayItem.height
        if(!(tWidth < newValueWidth && tWidth != 0 )) tWidth = newValueWidth
        if(!(tHeight < newValueHeight && tHeight != 0)) tHeight= newValueHeight
      })
      console.log('travelarray',array)
    })
    console.log(pWidth, tWidth, pHeight, tHeight)
    if(pWidth >= tWidth || pHeight >= tHeight) {
      console.log(pWidth, tWidth, pHeight, tHeight)
      isValid = false;
    }
    return isValid
  }
  
  

}
