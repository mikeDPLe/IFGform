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
      result.push(poop.signatureImg)
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
    var res = this.iterateCustomer()
    console.log("result" + res)
    //dateField.setText(result)
    dateField.setText("helo")

    const marioUrl = 'https://pdf-lib.js.org/assets/small_mario.png'
    //const marioImageBytes = await fetch(marioUrl).then(res => res.arrayBuffer())
    const marioImageBytes = res
    //const marioImage = await pdfDoc.embedPng(marioImageBytes)

    //const sigField = form.getButton('Image1_af_image')
    //sigField.setImage(marioImage)

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    
    //trigger auto downloading (broken)
    const pdfBytes = await pdfDoc.save()
    //download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");

    return pdfDataUri
      
  }

}
