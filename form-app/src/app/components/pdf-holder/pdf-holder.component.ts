import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MakePDFService } from '../../services/make-pdf.service';
import { PdfJsViewerComponent } from 'ng2-pdfjs-viewer';

@Component({
  selector: 'app-pdf-holder',
  templateUrl: './pdf-holder.component.html',
  styleUrls: ['./pdf-holder.component.css']
})
export class PdfHolderComponent implements OnInit {

  constructor(private pdf:MakePDFService
  ) { }

  @ViewChild('pdf') pagePdf!:ElementRef;
  @ViewChild('pdfViewer') public pdfViewer!:PdfJsViewerComponent
  uri!:any
  arrayUri!:Uint8Array
  
  //access by tying /pdf in root
 async ngOnInit(): Promise<void> {
    this.pdf.makePdf().then(uri => {
      this.pdfViewer.pdfSrc = uri;
      this.pdfViewer.refresh();
    })
  }
  async downloadPDF(){
    this.pdf.downloadPdf()
  }
}

