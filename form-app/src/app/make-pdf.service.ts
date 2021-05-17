import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';
import { SignatureHandlerService } from './signature-handler.service';
import { PDFDocument, StandardFonts, rgb, values } from 'pdf-lib'
import { Dimensions } from './classes/dimensions';
import { SignatureInfo } from './classes/signature-info';
import { PdfInfo } from './classes/pdf-info';
import download from 'downloadjs'

@Injectable({
  providedIn: 'root'
})
export class MakePDFService {

  constructor(private sig:SignatureHandlerService,
    private dim:DimensionService) {
    //signature arrays hold: 1. string uri of the signature 2. a string name of the individual who signed it 
    //3. if it was a customer or employee signature 4. the step the signature was obtained at
    // steps are handled in the checkStatus in the signature-handler service
    // generally the format is '(install||remove)' + _+ '(customer||employee)'
    // exception are the finalInstallStep and finalRemoveStep
    this.arrayCustomer = this.sig.custSigArray
    this.arrayEmployee = this.sig.employSigArray
    //dimension arrays hold: 1. An array of the widths (doorway/product) parsed in float.
    // 2. An array of the heights entered.
    // 3. the units (if applicable) <-- can probably remove this.
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

   //defines all of the fields in the pdf to fill
   p = new PdfInfo
  
   formUrl = 'assets/equipment.pdf'

  private iterateCustomer(){
    var result:Array<any> = []
    if(this.arrayCustomer.length != 0) {
    this.arrayCustomer.forEach(poop => {
      result.push(poop.signatureImg)
    })
    return result.toString()
  } return ""
   }

   private iterate(){
    var result:Array<any> = []
    if(this.arrayCustomer.length != 0) {
    this.arrayCustomer.forEach(item => {
       switch(item.step){
         case "install_customer":
           this.p.CustomerPrint1 = item.name
           this.p.CustomerSign1 = item.signatureImg           
         break;
         case "remove_customer":
           this.p.CustomerPrint2 = item.name
           this.p.CustomerSign2 = item.signatureImg
          //needs ids to update class
         break;
         case "customer_installFinal":
          this.p.CustomerSign3 = item.signatureImg;
          this.p.CustomerPrint3= item.name;
         break;
         case "customer_removeFinal":
          this.p.CustomerSign5= item.signatureImg
          this.p.CustomerPrint5 = item.signatureImg 
         break;
         default:
         break;
       }
    })
    return result.toString()
  } return ""
   }

   private iterateDoorHeight(){
    var result:Array<any> = []
   this.arrayInstallDoorDim.forEach(poop => {
      result.push(poop.height)
    })
    return result.toString()
   }

   private iterateCustomerName(){
    var result:Array<any> = []
   this.arrayCustomer.forEach(poop => {
      result.push(poop.name)
    })
    return result.toString()
   }

   private getDate(){
    var date = new Date().toLocaleDateString()
    return date.toString()

   }

   private iterateEmployee(){
    var result:Array<any> = []
    this.arrayEmployee.every
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
    const imageField = form.getButton('Image2_af_image')
    var custSig = this.iterateCustomer()
    var embimg = await pdfDoc.embedPng(custSig)
    imageField.setImage(embimg)
    var custName = this.iterateCustomerName()[0]
    const custNameField = form.getTextField('PrintName2')
    custNameField.setText(custName)
    console.log("result" + custSig + custName)
    dateField.setText(this.getDate())
    // dateField.setText("result" + res)
    // dateField.setImage(embimg)

    var doorInstallHeight = this.iterateDoorHeight()
    const doorInstallHeightField = form.getTextField('ProductHeight')
    doorInstallHeightField.setText(doorInstallHeight)

    //const sigField = form.getButton('Image1_af_image')
    //sigField.setImage(marioImage)

    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    
    //trigger auto downloading (broken)
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");

    return pdfDataUri
      
  }

}
