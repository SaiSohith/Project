import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
=======
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
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
<<<<<<< HEAD
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router:Router) { }

    public user=null;

    updateUser(userid,data)
    {
      return this.http.put(`${this.url}/Users/updateuser/${userid}`,data)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }
    getUser(userid)
    {
      return this.http.get(`${this.url}/Users/getUserById/${userid}`)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }
=======
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService) { }

    public user=null;
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
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
<<<<<<< HEAD
      return this.http.get(`${this.url}/products/getproducts/${name}`)
=======
      return this.http.get(`${this.url}/products/products/${name}`)
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

    Signin(user)
    {
      return this.http.post(`${this.url}/Users/addUser`,user)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

<<<<<<< HEAD
    pushToCart(cart)
    {
      return this.http.put(`${this.url}/Users/updatecart/${cart.id}`,cart)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

=======
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
    Login(email,password)
    {
      return this.http.get(`${this.url}/Users/getUser/${email}/${password}`)
      .pipe(catchError(this.HttpErrorMsg.handleError));
    }

<<<<<<< HEAD
    loggedin()
    {
      return !!localStorage.getItem('token');
    }

    logoutUser() {
      localStorage.removeItem('token')
      this.router.navigate(['/events'])
    }

    getToken() {
      return localStorage.getItem('token')
    }

    updateLocalUser(user)
    {
      const details=JSON.parse(localStorage.getItem('token'));
      const object = {
        token: details.token,
        resp: user
      }
      localStorage.setItem('token',JSON.stringify(object));
    }
=======
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
  }
