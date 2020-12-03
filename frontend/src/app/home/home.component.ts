import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http';
=======
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  public contracts ;
  public store = [];
  public arr: Product;
  public user=this.product.user;
  public data;
  public err;
=======
public contracts ;
public store: Product[] = [];
public arr: Product;
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
  constructor(private product: ProductService, private router: Router) { }


  ngOnInit(): void {
<<<<<<< HEAD
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
=======
    this.product.getProduct()
    .subscribe((details) => { this.contracts=details; console.log("hello",details)});
    if(this.product.user==null)
    {
      this.router.navigate(['/login'])
    }
  }
  addToCart(product: Product) {
    const ar = {position: product.position, name: product.name,  price: product.price};
    this.arr = ar;
  //  alert("added to cart sucessfully");
    this.product.store.push(this.arr);
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
  }

}
