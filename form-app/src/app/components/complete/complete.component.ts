import { Component, OnInit } from '@angular/core';
import { MakePDFService } from '../../services/make-pdf.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private pdf:MakePDFService) {

   }

  ngOnInit(): void {
  }

}
