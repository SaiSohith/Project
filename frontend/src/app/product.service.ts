import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
export interface Product {
  name: string;
  position: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url: String="http://localhost:9000";
 public store: Product[] =[];
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService) { }

    public user=null;
    getProduct()
    {
      return this.http.get(`${this.url}/products/products`)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

    postProduct(product)
    {
      return this.http.post(`${this.url}/products/addProduct`,product)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

    getOneProduct(name)
    {
      return this.http.get(`${this.url}/products/products/${name}`)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

    Signin(user)
    {
      return this.http.post(`${this.url}/Users/addUser`,user)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

    Login(email,password)
    {
      return this.http.get(`${this.url}/Users/getUser/${email}/${password}`)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

  }
