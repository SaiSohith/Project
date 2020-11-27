import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public contracts: Product[] ;
  public store: Product[] ;
  public i = 0 ;
  public totalprice: number=0;
  public sample;
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.store = this.product.store;
    this.Price();
    if(this.product.user==null)
    {
      this.router.navigate(['/login'])
    }
  }

  Price()
  {
    for(let i=0;i<this.store.length;i++)
    {
      this.totalprice=this.totalprice+this.store[i].price;
    }
  }

  remove(k) {
    this.i = this.store.findIndex(x => x.position === k.position);

    if (this.i !== -1) {
      this.store.splice(this.i, 1) ;
  }

  }

}
