import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }
  p:any=1;
 
  logedUserId:any;
  logedOrderData:any;
 
  ngOnInit(): void {
    this.logedUserId=localStorage.getItem('logId');
    this.api.order_list(this.logedUserId).subscribe((res)=>{
      this.logedOrderData=res;
    })
   
  }

}
