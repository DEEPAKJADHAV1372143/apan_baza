import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url:any='http://localhost:8000';
  constructor( private http:HttpClient) { }

  registrationInsert(data:any){
    return this.http.post(this.url+'/registration_insert',data)
  }
  registrationLogin(data:any){
    return this.http.post(this.url+'/login_check',data)
  }
  registrationUser(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/registration_select_one',obj)
  }

  ///procuct section
  ProductInsert(data:any){
    return this.http.post(this.url+'/productInsert',data)
  }
  productSelect(){
    return this.http.get(this.url+'/product_select')
  }
  productDelete(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/product_delete',obj)
  }
  productEdit(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/product_edit',obj)
  }
  ProductOne(data:any){
    return this.http.post(this.url+'/ProductOne',data)
  }
  productOneByOwner(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/product_select_by_owner',obj)
  }
  contactInsert(data:any){
    return this.http.post(this.url+'/contactInsert',data)
  }
  call_one_product(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/product_edit',obj)
  }
  call_one_owner(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/call_one_owner',obj)
  }
  orderInsert(data:any){
    return this.http.post(this.url+'/orderInsert',data)
  }

  order_list(data:any){
    var obj={id:data};
    return this.http.post(this.url+'/order_list',obj)
  }

  private messageSource = new BehaviorSubject<any>("0");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}


