import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureImageComponent } from './components/capture-image/capture-image.component';
import { CheckDoorComponent } from './components/check-door/check-door.component';
import { CheckRemoveComponent } from './components/check-remove/check-remove.component';
import { CompleteComponent } from './components/complete/complete.component';
import { CustRefuseComponent } from './components/cust-refuse/cust-refuse.component';
import { CustomerSignaturePadComponent } from './components/customer-signature-pad/customer-signature-pad.component';
import { DimFailEmployee1Component } from './components/dim-fail-employee1/dim-fail-employee1.component';
import { DimensionFormComponent } from './components/dimension-form/dimension-form.component';
import { DimensionProductComponent } from './components/dimension-product/dimension-product.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { LoginComponent } from './components/login/login.component';
import { PdfHolderComponent } from './components/pdf-holder/pdf-holder.component';
import { ProceedComponent } from './components/proceed/proceed.component';
import { SafetyComponent } from './components/safety/safety.component';

const routes: Routes = [
    {path: "", component:EmployeeInfoComponent},
  {path:"safety", component:SafetyComponent, outlet:"primary"},
  {path:"dimension-form", component:DimensionFormComponent},
  {path:"check-door", component:CheckDoorComponent},
  {path:"dimension-product", component:DimensionProductComponent},
  {path:"dim-fail", component:DimFailEmployee1Component},
  {path:"customer-sign", component:CustomerSignaturePadComponent},
  {path:"cust-refuse", component:CustRefuseComponent},
  {path:"check-remove" ,component:CheckRemoveComponent},
  {path:"proceed", component: ProceedComponent},
  {path:"complete", component:CompleteComponent},
  {path:"pdf", component:PdfHolderComponent},
  {path:"image", component:CaptureImageComponent},
  {path: '**', redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
