import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakePDFService } from '../make-pdf.service';
import {DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-pdf-holder',
  templateUrl: './pdf-holder.component.html',
  styleUrls: ['./pdf-holder.component.css']
})
export class PdfHolderComponent implements OnInit {

  constructor(private pdf:MakePDFService,
    private sanitizer:DomSanitizer) { }

  @ViewChild('pdf') pagePdf!:ElementRef;
  uri!:any;
  
  //access by tying /pdf in root
 async ngOnInit(): Promise<void> {
    this.pdf.makePdf().then(x =>
      this.uri = this.sanitizer.bypassSecurityTrustResourceUrl(x)
    )
  }
  ngAfterViewInit(){
    
  }

  
}

