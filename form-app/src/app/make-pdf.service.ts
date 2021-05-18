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
    this.arrayCustomer.forEach(poop => {
       switch(poop.step){
         case "install_customer":
           this.p.CustomerPrint1 = poop.name
           this.p.CustomerSign1 = poop.signatureImg           
         break;
         case "remove_customer":
           this.p.CustomerPrint2 = poop.name
           this.p.CustomerSign2 = poop.signatureImg           
         break;
         case "customer_installFinal":
          //this.p.Image2_af_image = poop.signatureImg;
          //this.p.Names_print_and_sign = poop.name;
         break;
         case "customer_removeFinal":
          this.p.CustomerPrint5 = poop.name
          this.p.CustomerSign5 = poop.signatureImg           
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

    // iterate to get your info
    iterate();
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
