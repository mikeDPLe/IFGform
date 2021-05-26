import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule,  } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button'; 
import { MatDividerModule} from '@angular/material/divider'; 
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SafetyComponent } from './safety/safety.component';
import { DimensionFormComponent } from './dimension-form/dimension-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckDoorComponent } from './check-door/check-door.component';
import { DimensionProductComponent } from './dimension-product/dimension-product.component';
import { DimFailEmployee1Component } from './dim-fail-employee1/dim-fail-employee1.component';
import { CustomerSignaturePadComponent } from './customer-signature-pad/customer-signature-pad.component';
import { ProblemInstallComponent } from './problem-install/problem-install.component';
import { CustRefuseComponent } from './cust-refuse/cust-refuse.component';
import { CheckRemoveComponent } from './check-remove/check-remove.component';
import { ProceedComponent } from './proceed/proceed.component';
import { CheckInitialComponent } from './check-initial/check-initial.component';
import { CompleteComponent } from './complete/complete.component';
import { PdfHolderComponent } from './pdf-holder/pdf-holder.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { ManagerContactComponent } from './manager-contact/manager-contact.component';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { NavbarBelowComponent } from './navbar-below/navbar-below.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafetyComponent,
    DimensionFormComponent,
    NavbarComponent,
    CheckDoorComponent,
    DimensionProductComponent,
    DimFailEmployee1Component,
    CustomerSignaturePadComponent,
    ProblemInstallComponent,
    CustRefuseComponent,
    CheckRemoveComponent,
    ProceedComponent,
    CheckInitialComponent,
    CompleteComponent,
    PdfHolderComponent,
    EmployeeInfoComponent,
    ManagerContactComponent,
    CaptureImageComponent,
    NavbarBelowComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    PdfJsViewerModule,
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
