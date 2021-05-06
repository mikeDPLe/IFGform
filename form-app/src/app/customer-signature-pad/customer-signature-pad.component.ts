import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
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
    private step:StepService,
    
  ) {
    this.show = signatureService.checkSigIsCust()
    console.log('show', this.show)
  }

  @ViewChild('signaturepad') canvasPad!: ElementRef<HTMLCanvasElement>
  show: boolean;
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
   this.signatureService.checkRepeat()
  }
  onRefuse(){
    this.step.setStepRefuse()
  }

}

