import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/servie/api.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  @ViewChild('myInput')
  myInput!: ElementRef<HTMLInputElement>;

  allProductList:any;
  dry_fruit:any;
  fruit:any;
  vegitables:any;

  filteredItems: string[] = [];
  searchText: any;
 

  filterTable() {
    const value = this.myInput.nativeElement.value.toLowerCase();
    this.filteredItems = this.allProductList.filter((item: string) =>
      item.toLowerCase().indexOf(value) > -1
    );
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $('#myInput').val().toLowerCase();
        $(".row2 .col-md-2").filter(function() {
          $('.row2 .col-md-2').toggle($('.row2 .col-md-2').text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
   
    
    this.api.productSelect().subscribe((res)=>{
      this.allProductList=res;
      this.dry_fruit = this.allProductList.filter((item:any) => item.prodType == 'dry_fruit');
      this.fruit = this.allProductList.filter((item:any) => item.prodType == 'fruit');
      this.vegitables = this.allProductList.filter((item:any) => item.prodType == 'vegitables');
      
    })
  }

    order_req(id:any,userId:any){
       this.router.navigate(['/order',id,userId]);
    }
}
