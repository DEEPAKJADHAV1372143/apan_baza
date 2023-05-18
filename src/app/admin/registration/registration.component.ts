import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../servie/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }

  formData:FormGroup|any;
  submitted:any;
  ngOnInit(): void {
    this.formData= this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      banck_acc: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
      
  });
  }
  get f() { return this.formData.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
        return;
    }
    this.api.registrationInsert(this.formData.value).subscribe((res)=>{
      console.log(res);
    })
    alert('Registration is successfullay');
    location.reload();
  }
    


}
