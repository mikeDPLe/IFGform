import { Component, OnInit } from '@angular/core';
import { MakePDFService } from '../make-pdf.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private pdf:MakePDFService) {

   }

  ngOnInit(): void {
    console.log(this.pdf.arrayCustomer)
    console.log(this.pdf.arrayEmployee)
    console.log(this.pdf.arrayInstallDoorDim)
    console.log(this.pdf.arrayInstallProductDim)
    console.log(this.pdf.arrayRemoveDoorDim)
    console.log(this.pdf.arrayRemoveProductDim)
  }

}
