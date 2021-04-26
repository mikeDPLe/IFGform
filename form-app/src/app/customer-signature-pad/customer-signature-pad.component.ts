import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { SignatureHandlerService } from '../signature-handler.service';
import { StepService } from '../step.service';


@Component({
  selector: 'app-customer-signature-pad',
  templateUrl: './customer-signature-pad.component.html',
  styleUrls: ['./customer-signature-pad.component.css']
})
export class CustomerSignaturePadComponent implements OnInit {

  constructor(
    private signatureService:SignatureHandlerService,
    private step:StepService
  ) {
    this.show = signatureService.checkSigIsCust()
    console.log('show', this.show)
  }

  @ViewChild('signaturepad') canvasPad!: ElementRef
  show: boolean;
  init: boolean = true;
  inputName!: string 
  signaturePad!: SignaturePad;
  signatureEmpty:boolean = true;
 
 

  ngOnInit(): void {}
  ngAfterViewInit(){
   this.signaturePad = new SignaturePad(this.canvasPad.nativeElement)   
  }
  clear(){
    this.signaturePad.clear()
  }
  change(){
   this.signatureEmpty =  this.signaturePad.isEmpty()
  }
  onSubmit(f:NgForm) {
   var uri =  this.signaturePad.toDataURL()
   var name = this.inputName
   var y = this.signatureService.createSigInfo(uri,name)
   this.signatureService.pushtoArray(y);
   this.step.nextNavigate()
   this.step.incrementStep()
  }
  onRefuse(){
    this.step.setStepRefuse()
    this.step.nextNavigate()
  }

}

// document.getElementById("specPass").style.display = "none";
//     document.getElementById("problemInstall").style.display = "inline";
//     document.getElementById("signatureDiv").style.display = "inline";
//     var canvas = document.getElementById("signature-pad");
//     var signaturePad = new SignaturePad(canvas);
//     document.getElementById("customer_name").value = ""
//     document.getElementById('done').addEventListener('click', function validatePad1() {
//         var valid = 0;
//         var errorField = "";      
//         var customerNameField = document.getElementById("customer_name").value
//         console.log(customerNameField)
//         if(customerNameField === "") {
//             errorField += "Please type in customer's name"
//             valid += 1
//         }
//         if(signaturePad.isEmpty()) {    
//            errorField += " <br> Please enter a signature"
//            valid += 1
//         }
//         document.getElementById('errorMsg').innerHTML = errorField
//         if(valid == 0) {
//             var data = signaturePad.toDataURL()
//             var b = {
//                 customer: customerNameField,
//                 signatureURI: data,
//                 specFailed: true,
//                 step: "acceptDelivery"
//             }
//             customerSignatureHolder.push(b);
//             document.getElementById("signatureDiv").style.display = "none";
//             document.getElementById("problemInstall").style.display = "none"
//             complete()
//         }
//     })