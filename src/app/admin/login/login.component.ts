import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }

  formData:FormGroup|any;
  submitted:any;
  isLogin:any;
  ngOnInit(): void {
    this.formData= this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  });
  }
  get f() { return this.formData.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
        return;
    }
    this.api.registrationLogin(this.formData.value).subscribe((res)=>{
      this.isLogin=res;
    if(this.isLogin==null){
      alert('login is Falied');
      localStorage.removeItem("logId");
    }else{
      localStorage.setItem('logId',this.isLogin.id);
      this.router.navigate(['auth/dashboard']);
    }  
    });
 
  }
    


}
