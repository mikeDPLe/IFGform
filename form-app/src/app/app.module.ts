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
import { LoginComponent } from './components/login/login.component';
import { SafetyComponent } from './components/safety/safety.component';
import { DimensionFormComponent } from './components/dimension-form/dimension-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckDoorComponent } from './components/check-door/check-door.component';
import { DimensionProductComponent } from './components/dimension-product/dimension-product.component';
import { DimFailEmployee1Component } from './components/dim-fail-employee1/dim-fail-employee1.component';
import { CustomerSignaturePadComponent } from './components/customer-signature-pad/customer-signature-pad.component';
import { ProblemInstallComponent } from './components/problem-install/problem-install.component';
import { CustRefuseComponent } from './components/cust-refuse/cust-refuse.component';
import { CheckRemoveComponent } from './components/check-remove/check-remove.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { CompleteComponent } from './components/complete/complete.component';
import { PdfHolderComponent } from './components/pdf-holder/pdf-holder.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { ManagerContactComponent } from './components/manager-contact/manager-contact.component';
import { CaptureImageComponent } from './components/capture-image/capture-image.component';
import { NavbarBelowComponent } from './components/navbar-below/navbar-below.component';
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
