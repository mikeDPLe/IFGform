import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';
import { SignatureHandlerService } from './signature-handler.service';
import { PDFDocument,PDFForm } from 'pdf-lib'
import { Dimensions } from '../classes/dimensions';
import { SignatureInfo } from '../classes/signature-info';
import { PdfInfo } from '../classes/pdf-info';
import download from 'downloadjs'
import { EmployeeInfo } from '../classes/employee-info';
import { EmployeeDetailsService } from './employee-details.service';
import { ImageHolderService } from './image-holder.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MakePDFService {

  constructor(private sig: SignatureHandlerService,
    private dim: DimensionService,
    private emp: EmployeeDetailsService,
    private image: ImageHolderService, 
    private datePipe:DatePipe) {
    //signature arrays hold: 1. string uri of the signature 2. a string name of the individual who signed it 
    //3. if it was a customer or employee signature 4. the step the signature was obtained at
    // steps are handled in the checkStatus in the signature-handler service
    // generally the format is '(install||remove)' + _+ '(customer||employee) + (step_number)'
    // example install_customer1 or remove_employee2
    this.arrayCustomer = this.sig.custSigArray
    this.arrayEmployee = this.sig.employSigArray
    //dimension arrays hold: 1. An array of the widths (doorway/product) parsed in float.
    // 2. An array of the heights entered.
    // 3. the units (if applicable) <-- can probably remove this.
    this.arrayInstallDoorDim = this.dim.travelDimArray
    this.arrayInstallProductDim = this.dim.productDimArray
    this.arrayRemoveDoorDim = this.dim.travelRemoveDimArray
    this.arrayRemoveProductDim = this.dim.productRemoveDimArray
    this.employeeInfo = this.emp.info

  }
  arrayCustomer: Array<SignatureInfo> = []
  arrayEmployee: Array<SignatureInfo> = []
  arrayInstallDoorDim: Array<Dimensions> = []
  arrayInstallProductDim: Array<Dimensions> = []
  arrayRemoveDoorDim: Array<Dimensions> = []
  arrayRemoveProductDim: Array<Dimensions> = []
  employeeInfo: EmployeeInfo

  //defines all of the fields in the pdf to fill
  p = new PdfInfo

  finalPDF: any

  formUrl = 'assets/equipment.pdf'

  async makePdf() {
    const formPdfBytes = await fetch(this.formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // iterate to get your info
    await this.iterate();
    
    // checks if Manager response was necessary and adds a page with details if it exists
    this.embedManagerResponse(pdfDoc)
    
    //add images, abstract some of this shit away into functions
    this.embedImages(pdfDoc)

    // mandatory fields (door height, order number etc)
    this.embedMandatoryFields(form)
   
    // conditional fields (logic needed to fill depending on circumstance)
    this.embedConditionalFields(pdfDoc,form)
   
    const pdf8bit = await pdfDoc.save()
    //trigger auto downloading 
   
    this.finalPDF = pdfDoc
  
    return pdf8bit
  }

  async downloadPdf() {
    const pdfBytes = await this.finalPDF.save()
    //fileName = date, order, IFGSaleRepName, CustomerPrint1, EmployeePrint1
    const fileName = "equipment_installation_" + this.p.Date + "_" + this.p.IFGSaleRepName + "_" + this.p.CustomerPrint1 + "_" + this.p.EmployeePrint1 + ".pdf"
    download(pdfBytes, fileName, "application/pdf");
   
  }

  // sets class properties from data
  private async iterate() {
    var tempDate = new Date().toLocaleString()
    var shortDate = this.datePipe.transform(tempDate, 'MM-dd-YYYY')
      if(shortDate)
      {
       this.p.Date = shortDate
      }
   
    
    this.iterateCustomer()
    this.iterateEmployee()
    this.iterateInstallDoorDimensions()
    this.iterateRemoveDoorDimensions()
    this.iterateNewProductDimensions()
    this.iterateOldProductDimensions()
    this.iterateImages()

    

  }
  private iterateCustomer() {
    
    if (this.arrayCustomer.length != 0) {
      this.arrayCustomer.forEach(item => {
        switch (item.step) {
          case "customer_install1":
            
            this.p.CustomerPrint1 = item.name
            this.p.CustomerSign1 = item.signatureImg
            break;
          case "customer_remove1":
           
            this.p.CustomerPrint2 = item.name
            this.p.CustomerSign2 = item.signatureImg
            break;
          case "customer_install2":
           
            this.p.CustomerPrint4 = item.name;
            this.p.CustomerSign4 = item.signatureImg;
            break;
          case "customer_remove2":
           
            this.p.CustomerPrint5 = item.name
            this.p.CustomerSign5 = item.signatureImg
            break;
          case "customer_installFinal":
          
            this.p.CustomerPrint3 = item.name
            this.p.CustomerSign3 = item.signatureImg
           
            break;
          default:
        }
      })
    }
  }
  private iterateEmployee() {
 
    if (this.arrayEmployee.length != 0) {
      this.arrayEmployee.forEach(item => {
        switch (item.step) {
          case "employee_install1":
            this.p.EmployeePrint1 = item.name;
            this.p.EmployeeSign1 = item.signatureImg;
            break;
          case "employee_remove1":
            this.p.EmployeePrint2 = item.name;
            this.p.EmployeeSign2 = item.signatureImg;
        }
      })
    }
  }
  private iterateInstallDoorDimensions() {
    var array = this.arrayInstallDoorDim
    if (array.length != 0) {
      const resultHeight = this.getHeight(array)
      const resultWidth = this.getWidth(array)
      this.p.DoorHeight = resultHeight.toString()
      this.p.DoorWidth = resultWidth.toString()
    }
  }
  private iterateRemoveDoorDimensions() {
    var array = this.arrayRemoveDoorDim
    if (array.length != 0) {
      const resultHeight = this.getHeight(array)
      const resultWidth = this.getWidth(array)
      this.p.OldDoorHeight = resultHeight.toString()
      this.p.OldDoorWidth = resultWidth.toString()
    }
  }
  private iterateNewProductDimensions() {
    var array = this.arrayInstallProductDim
    if (array.length != 0) {
      const resultHeight = this.getHeight(array)
      const resultWidth = this.getWidth(array)
      this.p.ProductHeight = resultHeight.toString()
      this.p.ProductWidth = resultWidth.toString()
    }
  }
  private iterateOldProductDimensions() {
  
    var array = this.arrayRemoveProductDim
    if (array.length != 0) {
      const resultHeight = this.getHeight(array)
      const resultWidth = this.getWidth(array)
      this.p.OldProductHeight = resultHeight.toString()
      this.p.OldProductWidth = resultWidth.toString()
    }
  }
  private iterateImages(){
    this.p.InstallImages = this.image.getInstallImages()
    this.p.RemoveImages = this.image.getRemoveImage()
  }

  private getHeight(array: Array<Dimensions>) {
    var result: Array<number> = []
    array.forEach(item => {
      result.push(item.height)
    })
    return result
  }
  private getWidth(array: Array<Dimensions>) {
    var result: Array<number> = []
    array.forEach(item => {
      result.push(item.width)
    })
    return result
  }

  private checkEmployeeInfoIsRefuse() {
    var obj = this.employeeInfo
    this.p.CrewName = obj.installCrew.toString()
    this.p.OrderNumber = obj.orderNumber.toString()
    this.p.IFGSaleRepName = obj.salesRep
    this.p.IFGSaleRepContactNumber = obj.salesRepContactNumber
    if (obj.custRefused) {
      this.checkRefuseInfo()
      return false
    } else return true
  }
  private checkRefuseInfo() {
    var obj = this.employeeInfo
    this.p.ManagerInstructions = obj.managerInstructions
    this.p.ManagerName = obj.managerName
    this.p.ManagerNumber = obj.managerNumber
    this.p.ManagerProceed = obj.managerProceed
  }

  // abstracted pdf embed functions
  
  private embedManagerResponse(pdfDoc: PDFDocument) {
    if (!(this.checkEmployeeInfoIsRefuse())) {

      const page = pdfDoc.addPage([350, 350])
      var textsize = 10
      var labelX = 30;
      var textX = 150;


      var mNY1 = 300
      page.drawText('Manager Name:', { x: labelX, y: mNY1, size: textsize })
      page.drawText(this.p.ManagerName!, { x: textX, y: mNY1, size: textsize })

      var miY = 240
      page.drawText('Manager Instructions', { x: labelX, y: miY, size: textsize })
      page.drawText(this.p.ManagerInstructions!, { x: textX, y: miY, size: textsize, })

      var mnY = 180
      page.drawText('Manager Number:', { x: labelX, y: mnY, size: textsize })
      page.drawText(this.p.ManagerNumber!, { x: textX, y: mnY, size: textsize })

      var pY = 120
      page.drawText('Instructed to proceed?:', { x: labelX, y: pY, size: textsize })
      if (this.p.ManagerProceed) {
        page.drawText('yes', { x: textX, y: pY, size: textsize })
      } else page.drawText('no', { x: textX, y: pY, size: textsize })
    }
  }
  private async embedImages(pdfDoc: PDFDocument) {
    if (this.p.InstallImages) {
      for (const value of this.p.InstallImages) {
      

        const page = pdfDoc.addPage()

        var pageWidth = page.getWidth()
        var pageHeight = page.getHeight()

        var imageA = await pdfDoc.embedJpg(value)
        const imageDims = imageA.scaleToFit(pageWidth - 100, pageHeight - 100)
        var imageWidth = imageDims.width
        var imageHeight = imageDims.height

        // center the boy
        var startingX = (pageWidth - imageWidth) / 2
        var startingY = (pageHeight - imageHeight) / 2

        page.drawImage(imageA, {
          x: startingX,
          y: startingY,
          width: imageWidth,
          height: imageHeight,
        })
      }
    }

    if (this.p.RemoveImages) {
      for (const value of this.p.RemoveImages) {

        const page = pdfDoc.addPage()

        var pageWidth = page.getWidth()
        var pageHeight = page.getHeight()

        var imageA = await pdfDoc.embedJpg(value)
        const imageDims = imageA.scaleToFit(pageWidth - 100, pageHeight - 100)
        var imageWidth = imageDims.width
        var imageHeight = imageDims.height

        // center the box
        var startingX = (pageWidth - imageWidth) / 2
        var startingY = (pageHeight - imageHeight) / 2

        page.drawImage(imageA, {
          x: startingX,
          y: startingY,
          width: imageWidth,
          height: imageHeight,
        })
      }
    }

  }
  private embedMandatoryFields(form: PDFForm) {
    // mandatory fields (door height, order number etc)
    const dateField = form.getTextField('Date')
   
    dateField.setText(this.p.Date)
 

    const CrewName = form.getTextField('CrewName')
    CrewName.setText(this.p.CrewName)

    const OrderNumber = form.getTextField('OrderNumber')
    OrderNumber.setText(this.p.OrderNumber)

    const IFGSaleRepName = form.getTextField('IFGSaleRepName')
    IFGSaleRepName.setText(this.p.IFGSaleRepName)

    const IFGSaleRepContactNumber = form.getTextField('IFGSaleRepContactNumber')
    IFGSaleRepContactNumber.setText(this.p.IFGSaleRepContactNumber)

    var doorInstallHeight = this.p.DoorHeight
    const doorInstallHeightField = form.getTextField('DoorHeight')
    doorInstallHeightField.setText(doorInstallHeight)

    var doorInstallWidth = this.p.DoorWidth
    const doorInstallWidthField = form.getTextField('DoorWidth')
    doorInstallWidthField.setText(doorInstallWidth)

    var oldDoorInstallHeight = this.p.OldDoorHeight
    const oldDoorInstallHeightField = form.getTextField('OldDoorHeight')
    oldDoorInstallHeightField.setText(oldDoorInstallHeight)

    var oldDoorInstallWidth = this.p.OldDoorWidth
    const oldDoorInstallWidthField = form.getTextField('OldDoorWidth')
    oldDoorInstallWidthField.setText(oldDoorInstallWidth)

    var productInstallHeight = this.p.ProductHeight
    const productInstallHeightField = form.getTextField('ProductHeight')
    productInstallHeightField.setText(productInstallHeight)

    var productInstallWidth = this.p.ProductWidth
    const productInstallWidthField = form.getTextField('ProductWidth')
    productInstallWidthField.setText(productInstallWidth)

    var oldProductInstallHeight = this.p.OldProductHeight
    const oldProductInstallHeightField = form.getTextField('OldProductHeight')
    oldProductInstallHeightField.setText(oldProductInstallHeight)

    var oldProductInstallWidth = this.p.OldProductWidth
    const oldProductInstallWidthField = form.getTextField('OldProductWidth')
    oldProductInstallWidthField.setText(oldProductInstallWidth)
  }
  private embedConditionalFields(pdfDoc: PDFDocument, form: PDFForm) {
    this.checkCustomerFields(pdfDoc, form)
    this.checkEmployeeFields(pdfDoc, form)
  }

  private async checkCustomerFields(pdfDoc: PDFDocument, form: PDFForm) {
    if (this.p.CustomerSign1.length > 0) {
      const CustomerSign1 = form.getButton('CustomerSign1')
      var embimg = await pdfDoc.embedPng(this.p.CustomerSign1)
      CustomerSign1.setImage(embimg)

      const CustomerPrint1 = form.getTextField('CustomerPrint1')
      CustomerPrint1.setText(this.p.CustomerPrint1)

      const CustomerDate1 = form.getTextField('CustomerDate1')
      CustomerDate1.setText(this.p.Date)
    }


    if (this.p.CustomerSign2.length > 0) {
      const CustomerSign2 = form.getButton('CustomerSign2')
      var embimg = await pdfDoc.embedPng(this.p.CustomerSign2)
      CustomerSign2.setImage(embimg)

      const CustomerPrint2 = form.getTextField('CustomerPrint2')
      CustomerPrint2.setText(this.p.CustomerPrint2)

      const CustomerDate2 = form.getTextField('CustomerDate2')
      CustomerDate2.setText(this.p.Date)
    }

    if (this.p.CustomerSign3.length > 0) {
      const CustomerSign3 = form.getButton('CustomerSign3')
      var embimg = await pdfDoc.embedPng(this.p.CustomerSign3)
      CustomerSign3.setImage(embimg)

      const CustomerPrint3 = form.getTextField('CustomerPrint3')
      CustomerPrint3.setText(this.p.CustomerPrint3)

      const CustomerDate3 = form.getTextField('CustomerDate3')
      CustomerDate3.setText(this.p.Date)
    }

    if (this.p.CustomerSign4.length > 0) {
      const CustomerSign4 = form.getButton('CustomerSign4')
      var embimg = await pdfDoc.embedPng(this.p.CustomerSign4)
      CustomerSign4.setImage(embimg)

      const CustomerPrint4 = form.getTextField('CustomerPrint4')
      CustomerPrint4.setText(this.p.CustomerPrint4)

      const CustomerDate4 = form.getTextField('CustomerDate4')
      CustomerDate4.setText(this.p.Date)
    }

    if (this.p.CustomerSign5.length > 0) {
      const CustomerSign5 = form.getButton('CustomerSign5')
      var embimg = await pdfDoc.embedPng(this.p.CustomerSign5)
      CustomerSign5.setImage(embimg)

      const CustomerPrint5 = form.getTextField('CustomerPrint5')
      CustomerPrint5.setText(this.p.CustomerPrint5)

      const CustomerDate5 = form.getTextField('CustomerDate5')
      CustomerDate5.setText(this.p.Date)
    }
  }
  private async checkEmployeeFields(pdfDoc: PDFDocument, form: PDFForm) {
    if (this.p.EmployeeSign1.length > 0) {
      const EmployeeSign1 = form.getButton('EmployeeSign1')
      var embimg = await pdfDoc.embedPng(this.p.EmployeeSign1)
      EmployeeSign1.setImage(embimg)

      const EmployeePrint1 = form.getTextField('EmployeePrint1')
      EmployeePrint1.setText(this.p.EmployeePrint1)

      const EmployeeDate1 = form.getTextField('EmployeeDate1')
      EmployeeDate1.setText(this.p.Date)
    }

   
    if (this.p.EmployeeSign2.length > 0) {
      const EmployeeSign2 = form.getButton('EmployeeSign2')
      var embimg = await pdfDoc.embedPng(this.p.EmployeeSign2)
      EmployeeSign2.setImage(embimg)

      const EmployeePrint2 = form.getTextField('EmployeePrint2')
      EmployeePrint2.setText(this.p.EmployeePrint2)

      const EmployeeDate2 = form.getTextField('EmployeeDate2')
      EmployeeDate2.setText(this.p.Date)
    }
  }

}
  