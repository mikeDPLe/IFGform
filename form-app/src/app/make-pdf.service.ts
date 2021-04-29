import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';
import { SignatureHandlerService } from './signature-handler.service';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { Dimensions } from './classes/dimensions';
import { SignatureInfo } from './classes/signature-info';

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
   arrayEmployee: Array <any> = []
   arrayInstallDoorDim:Array<any> = []
   arrayInstallProductDim:Array<any> = []
   arrayRemoveDoorDim:Array<any> = []
   arrayRemoveProductDim:Array<any> = []

   formUrl = 'https://pdf-lib.js.org/assets/dod_character.pdf'

  private iterateCustomer(){
     this.arrayCustomer.forEach( array => {
       return array.isCustomer
     })
   }

   async poopy(){
    const formPdfBytes = await fetch(this.formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    // const dateField = form.getTextField('Text1')
    // dateField.setText(this.iterateCustomer.toString())
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    return pdfDataUri
      
  }

}
