import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public contracts;
  public store: Product[] ;
  public i = 0 ;
  public totalprice: number=0;
  public sample;
  public user;
  public err;
  public cart;
  details;
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.store = this.product.store;
    this.getDetail();
    this.details=JSON.parse(localStorage.getItem('token'));
  }

  getDetail()
  {
    const user=this.product.user;
    console.log(user);
    this.product.getUser(user._id)
    .subscribe((data) => {this.user=data;this.err=null;this.getCart()},(errr)=> { this.err=errr;this.user=null});
  }

  getCart()
  {
    this.product.user=this.user;
    this.cart=this.user.cart;
    this.Price();
  }

  Price()
  {
    this.totalprice=0;
    for(let i=0;i<this.cart.length;i++)
    {
      this.totalprice=this.totalprice+this.cart[i].price;
    }
  }

  updateCart()
  {
    const abc= {
      cart: this.cart
    }
    this.product.updateUser(this.user._id,abc)
    .subscribe((data) => {this.user=data;this.err=null;this.getCart()},(errr)=> { this.err=errr;this.user=null});
    this.getCart();
  }

  remove(k) {
    const a=k.price;
    // this.i = this.cart.filter(x => x.position === k.position);
    this.cart=this.cart.filter(x => x.position != k.position);
    this.updateCart();
    // if (this.i !== -1) {
    //   this.store.splice(this.i, 1) ;
    // }
  }

}
