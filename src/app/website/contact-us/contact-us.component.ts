import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


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
      massage: ['', Validators.required],
      subject: ['', Validators.required],
  });
  }
  get f() { return this.formData.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.formData.invalid) {
        return;
    }
    this.api.contactInsert(this.formData.value).subscribe((res)=>{
      console.log(res);
    })
    alert('Your Query is registaration successfullay');
    location.reload();
  }
    


}
