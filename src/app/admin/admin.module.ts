import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../servie/api.service';
import { AddprodComponent } from './addprod/addprod.component';
import { DeleteprodComponent } from './deleteprod/deleteprod.component';
import { EditprodComponent } from './editprod/editprod.component';
import { SelectprodComponent } from './selectprod/selectprod.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PlaceOrderComponent } from './place-order/place-order.component'; // <-- import the module

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    AddprodComponent,
    DeleteprodComponent,
    EditprodComponent,
    SelectprodComponent,
    PlaceOrderComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
})
export class AdminModule { }
