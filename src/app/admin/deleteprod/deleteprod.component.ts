import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-deleteprod',
  templateUrl: './deleteprod.component.html',
  styleUrls: ['./deleteprod.component.css']
})
export class DeleteprodComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }

  logedUserId:any;
 logedUserData?:any;

  ngOnInit(): void {
    this.logedUserId=localStorage.getItem('logId');
    this.api.registrationUser(this.logedUserId).subscribe((res)=>{
      this.logedUserData=res;
    })
  }

}
