import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public contracts ;
public store: Product[] = [];
public arr: Product;
  constructor(private product: ProductService, private router: Router) { }


  ngOnInit(): void {
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
  }

}
