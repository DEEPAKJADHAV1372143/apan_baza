import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servie/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api:ApiService
  ) { }
 logedUserId:any;
 logedUserData?:any;

 logOut(){
   localStorage.removeItem('logId');
   this.router.navigate(['./']);
 }
  ngOnInit(): void {
    this.logedUserId=localStorage.getItem('logId');
    this.api.registrationUser(this.logedUserId).subscribe((res)=>{
      this.logedUserData=res;
    })
  }

}
