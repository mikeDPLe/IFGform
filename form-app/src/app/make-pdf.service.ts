import { Injectable } from '@angular/core';
import { DimensionService } from './dimension.service';
import { SignatureHandlerService } from './signature-handler.service';
import { PDFDocument, StandardFonts, rgb, values } from 'pdf-lib'
import { Dimensions } from './classes/dimensions';
import { SignatureInfo } from './classes/signature-info';
import { PdfInfo } from './classes/pdf-info';
import download from 'downloadjs'
import { EmployeeInfo } from './employee-info';
import { EmployeeDetailsService } from './employee-details.service';

@Injectable({
  providedIn: 'root'
})
export class MakePDFService {

  constructor(private sig: SignatureHandlerService,
    private dim: DimensionService,
    private emp: EmployeeDetailsService) {
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
    this.employeeInfo = emp.info

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

  formUrl = 'assets/equipment.pdf'

  async makePdf() {
    const formPdfBytes = await fetch(this.formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // iterate to get your info
    await this.iterate();

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


    // mandatory fields (door height, order number etc)
    const dateField = form.getTextField('Date')
    dateField.setText(this.p.Date)

    var doorInstallHeight = this.p.DoorHeight
    const doorInstallHeightField = form.getTextField('ProductHeight')
    doorInstallHeightField.setText(doorInstallHeight)

    // conditional fields (logic needed to fill depending on circumstance)

    const EmployeeSign1 = form.getButton('EmployeeSign1')
    var embimg = await pdfDoc.embedPng(this.p.EmployeeSign1)
    EmployeeSign1.setImage(embimg)

    const EmployeePrint1 = form.getTextField('EmployeePrint1')
    EmployeePrint1.setText(this.p.EmployeePrint1)

    const EmployeeSign2 = form.getButton('EmployeeSign2')
    var embimg = await pdfDoc.embedPng(this.p.EmployeeSign2)
    EmployeeSign2.setImage(embimg)

    const EmployeePrint2 = form.getTextField('EmployeePrint2')
    EmployeePrint2.setText(this.p.EmployeePrint2)

    const CustomerSign1 = form.getButton('CustomerSign1')
    var embimg = await pdfDoc.embedPng(this.p.CustomerSign1)
    CustomerSign1.setImage(embimg)

    const CustomerPrint1 = form.getTextField('CustomerPrint1')
    CustomerPrint1.setText(this.p.CustomerPrint1)




    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });

    //trigger auto downloading (broken)
    //const pdfBytes = await pdfDoc.save()
    //download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");

    return pdfDataUri

  }

  private async iterate() {

    this.p.EmployeePrint1 = "Kevin Chow"
    //filler sign just to make the pdf render.
    this.p.EmployeeSign1 = "data:image/png;base64,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IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILCMwH9ryBtfLsuJpwAAAABJRU5ErkJggg=="
    this.p.CustomerSign1 = this.p.EmployeeSign1
    this.p.CustomerPrint1 = "Bob Hui"
    this.p.CustomerSign2 = this.p.EmployeeSign1
    this.p.CustomerPrint2 = "Bob Hui"
    this.p.CustomerSign3 = this.p.EmployeeSign1
    this.p.CustomerPrint3 = "Bob Hui"
    this.p.CustomerSign4 = this.p.EmployeeSign1
    this.p.CustomerPrint4 = "Bob Hui"
    this.p.CustomerSign5 = this.p.EmployeeSign1
    this.p.CustomerPrint5 = "Bob Hui"
    this.p.EmployeeSign2 = this.p.EmployeeSign1
    this.p.EmployeePrint2 = "Kevin Chow"
    this.iterateCustomer()
    this.iterateEmployee()
    this.iterateInstallDoorDimensions()
    this.iterateRemoveDoorDimensions()
    this.iterateNewProductDimensions()
    this.iterateOldProductDimensions()

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
            this.p.CustomerPrint3 = item.name;
            this.p.CustomerSign3 = item.signatureImg;
            break;
          case "customer_remove2":
            this.p.CustomerPrint5 = item.name
            this.p.CustomerSign5 = item.signatureImg
            break;
          default:
            break;
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
    this.p.Date = obj.date.toString()
    this.p.CrewName = obj.installCrew.toString()
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
 

}
