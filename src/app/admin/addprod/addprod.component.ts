import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }
 logedUserId:any;
 logedUserData:any;
 productData:FormGroup|any;
 submitted:any;

  ngOnInit(): void {
    this.logedUserId=localStorage.getItem('logId');
    this.api.registrationUser(this.logedUserId).subscribe((res)=>{
      this.logedUserData=res;
    })

    this.productData= this.formBuilder.group({
      prod_name:['',Validators.required],
      prod_img:['',Validators.required],
      prod_dis:['',Validators.required],
      prod_prise:['',Validators.required],
      prodType:['',Validators.required],	
      prod_quantity:['',Validators.required],
      userId:[this.logedUserId],
      
  });
  }

  get f() { return this.productData.controls; }
  addProduct(data:any) {
    this.submitted = true;
    if (this.productData.invalid) {
        return;
    }
    console.log(this.productData);
    this.api.ProductInsert(data.value).subscribe((res)=>{
      console.log(res);
    })
    alert('Product Added successfullay');
    location.reload();
  }

}
