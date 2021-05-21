import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
import SignaturePad from 'signature_pad';
import { EmployeeDetailsService } from '../employee-details.service';
import { SignatureHandlerService } from '../signature-handler.service';
import { StepService } from '../step.service';


@Component({
  selector: 'app-customer-signature-pad',
  templateUrl: './customer-signature-pad.component.html',
  styleUrls: ['./customer-signature-pad.component.css']
})
export class CustomerSignaturePadComponent implements OnInit {

  constructor(
    private signatureService: SignatureHandlerService,
    private step: StepService,
    public empDetails: EmployeeDetailsService
  ) {}

  @ViewChild('signaturepad') canvasPad!: ElementRef<HTMLCanvasElement>
  show: boolean = true
  inputName!: string 
  signaturePad!: SignaturePad;
  signatureEmpty:boolean = true;
  signatureTouched:boolean = false;
  picker1 = new Date
 

  ngOnInit(): void {
    this.signatureService.checkDiff()
    this.show = this.signatureService.isCust
    console.log('show', this.show)
  }
  ngAfterViewInit(){
   this.signaturePad = new SignaturePad(this.canvasPad.nativeElement)   
  }
  clear(){
    this.signaturePad.clear()
  }
  change(){
   this.signatureEmpty =  this.signaturePad.isEmpty()
   this.signatureTouched = true;
  }
  onSubmit(f:NgForm) {
   var date = this.picker1
   var uri =  this.signaturePad.toDataURL()
   var name = this.inputName
   var y = this.signatureService.createSigInfo(uri,name,date)
   this.signatureService.pushtoArray(y);
   this.signatureService.checkRepeat()
  }
  onRefuse(){
    this.step.setStepRefuse()
  }

}

