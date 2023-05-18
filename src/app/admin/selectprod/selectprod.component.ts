import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-selectprod',
  templateUrl: './selectprod.component.html',
  styleUrls: ['./selectprod.component.css']
})
export class SelectprodComponent implements OnInit  {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }
p:any=1;
 
  ownerRelatedData:any;
  logedUserId:any;
  logedUserData:any;
  editId:any;
  ngOnInit(): void {
    this.logedUserId=localStorage.getItem('logId');
    this.api.registrationUser(this.logedUserId).subscribe((res)=>{
      this.logedUserData=res;
    })
    this.api.productOneByOwner(this.logedUserId).subscribe((res)=>{
      this.ownerRelatedData=res;
    })
  }

  
 
  edit(id:any){
    this.api.changeMessage(id);
  }
  del(id:any){
    this.api.productDelete(id).subscribe((res)=>{
      alert('Product Deleted');
      location.reload();
    })
  }
}
