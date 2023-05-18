import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OrderReqComponent } from './order-req/order-req.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'order/:id/:userId',component:OrderReqComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
