import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-order-req',
  templateUrl: './order-req.component.html',
  styleUrls: ['./order-req.component.css']
})
export class OrderReqComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }

  formData:FormGroup|any;
  submitted:any;
  userId:any;
  id:any;

  getProdctDetails:any;
  getOwnerDetails:any;

  ngOnInit(): void {
    this.userId=this.route.snapshot.params.userId;
    this.id=this.route.snapshot.params.id;
    
    this.api.call_one_owner(this.userId).subscribe((res)=>{
      this.getOwnerDetails=res;
    });

    this.api.call_one_product(this.id).subscribe((res)=>{
      this.getProdctDetails=res;
    });
    

    this.formData= this.formBuilder.group({
      order_name: ['', Validators.required],
      order_email: ['', Validators.required],
      order_contact: ['', Validators.required],
      order_address: ['', Validators.required],
      prod_id:[this.id],
      farmer_id:[this.userId],
  });
  }
 
  get f() { return this.formData.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
        return;
    }
    this.api.orderInsert(this.formData.value).subscribe((res)=>{
      console.log(res);
    })
    alert('Your order place now successfullay And 1 product is sold.');
    location.reload();
  }
    
print(){
  window.print();
}

}
