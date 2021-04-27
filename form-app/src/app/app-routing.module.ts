import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckDoorComponent } from './check-door/check-door.component';
import { CheckRemoveComponent } from './check-remove/check-remove.component';
import { CustRefuseComponent } from './cust-refuse/cust-refuse.component';
import { CustomerSignaturePadComponent } from './customer-signature-pad/customer-signature-pad.component';
import { DimFailEmployee1Component } from './dim-fail-employee1/dim-fail-employee1.component';
import { DimensionFormComponent } from './dimension-form/dimension-form.component';
import { DimensionProductComponent } from './dimension-product/dimension-product.component';
import { LoginComponent } from './login/login.component';
import { ProceedComponent } from './proceed/proceed.component';
import { SafetyComponent } from './safety/safety.component';

const routes: Routes = [
  {path: "", component: LoginComponent, },
  {path:"safety", component:SafetyComponent, outlet:"primary"},
  {path:"dimension-form", component:DimensionFormComponent},
  {path:"check-door", component:CheckDoorComponent},
  {path:"dimension-product", component:DimensionProductComponent},
  {path:"dim-fail", component:DimFailEmployee1Component},
  {path:"customer-sign", component:CustomerSignaturePadComponent},
  {path:"cust-refuse", component:CustRefuseComponent},
  {path:"check-remove" ,component:CheckRemoveComponent},
  {path:"proceed", component: ProceedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
