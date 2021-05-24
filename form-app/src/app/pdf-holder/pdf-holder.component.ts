import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakePDFService } from '../make-pdf.service';
import {DomSanitizer } from '@angular/platform-browser'
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

@Component({
  selector: 'app-pdf-holder',
  templateUrl: './pdf-holder.component.html',
  styleUrls: ['./pdf-holder.component.css']
})
export class PdfHolderComponent implements OnInit {

  constructor(private pdf:MakePDFService,
    private sanitizer:DomSanitizer) { }

  @ViewChild('pdf') pagePdf!:ElementRef
  @ViewChild('pdfViewer') public pdfViewer!:PdfJsViewerComponent
  uri!:any;

  
  //access by tying /pdf in root
 async ngOnInit(): Promise<void> {
  this.pdf.makePdf().then (x => {
    this.pdfViewer.pdfSrc = x;
    this.pdfViewer.refresh();
  })

    // this.pdf.makePdf().then(x =>
    //   this.uri = this.sanitizer.bypassSecurityTrustResourceUrl(x)
    // )
  }
  ngAfterViewInit(){
    
  }

 
  
}

