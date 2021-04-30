import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';
import { SignatureHandlerService } from './signature-handler.service';
import { PDFDocument, StandardFonts, rgb, values } from 'pdf-lib'
import { Dimensions } from './classes/dimensions';
import { SignatureInfo } from './classes/signature-info';
import { SignatureType } from './classes/signature-type';

@Injectable({
  providedIn: 'root'
})
export class MakePDFService {

  constructor(private sig:SignatureHandlerService,
    private dim:DimensionService) {
    this.arrayCustomer = this.sig.custSigArray
    this.arrayEmployee = this.sig.employSigArray

    this.arrayInstallDoorDim = this.dim.travelDimArray 
    this.arrayInstallProductDim  = this.dim.productDimArray 
    this.arrayRemoveDoorDim =  this.dim.travelRemoveDimArray
    this.arrayRemoveProductDim =  this.dim.productRemoveDimArray 

   }
   arrayCustomer: Array<SignatureInfo> = []
   arrayEmployee: Array <SignatureInfo> = []
   arrayInstallDoorDim:Array<Dimensions> = []
   arrayInstallProductDim:Array<Dimensions> = []
   arrayRemoveDoorDim:Array<Dimensions> = []
   arrayRemoveProductDim:Array<Dimensions> = []

   formUrl = 'assets/equipment.pdf'

  private iterateCustomer(){
    var result:Array<any> = []
   this.arrayCustomer.forEach(poop => {
      result.push(poop.isCustomer)
    })
    return result.toString()
   }

   private iterateEmployee(){
    var result:Array<any> = []
   this.arrayEmployee.forEach(poop => {
      result.push(poop.isCustomer)
    })
    return result.toString()
   }

   async poopy(){
    const formPdfBytes = await fetch(this.formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    console.log(this.iterateCustomer())
    const dateField = form.getTextField('Date')
    var res = this.iterateEmployee()
    console.log("result" + res)
    //dateField.setText(result)
    dateField.setText("helo")
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    return pdfDataUri
      
  }

}
