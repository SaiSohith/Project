import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contracts ;
  public store = [];
  public arr: Product;
  public user=this.product.user;
  public data;
  public err;
  constructor(private product: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.GetAll();
  }
  addToCart(pro) {
  var cart=this.user.cart;
  cart.push(pro);
  const userabc = {
    id: this.user._id,
    cart: {
      position: pro.position,
      name: pro.name,
      price: pro.price
    }
  }
  this.product.pushToCart(userabc)
  .subscribe((details) => {console.log(details)}, (err) => { 
    if(err instanceof HttpErrorResponse)
    {
      if(err.status==401)
      {
        this.router.navigate(['/login']);
      }
    }
  });
  }

  Search()
  {
    if(this.data==null)
    {
      this.GetAll();
    }
    else
    {
      this.product.getOneProduct(this.data)
      .subscribe((details) => {this.contracts=details;console.log(details)}, (err) => { 
        this.err=err;
      });
    }
  }

  GetAll()
  {
    this.product.getProduct()
    .subscribe((details) => { this.contracts=details}, (err) => {console.log(err)});
  }

  Order()
  {
    alert('Order will be Delivered in 4 days!');
  }

}
