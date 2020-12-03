import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ProductService } from '.././product.service';
import { Router } from '@angular/router';
=======
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  public abc=false;
  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    const details=JSON.parse(localStorage.getItem('token'));
    this.product.user=details.resp;
    if(this.product.user==null)
    {
      this.abc=false;
    }
    else
    {
      this.abc=true;
    }
  }

  logout()
  {
    this.product.user=null;
    this.product.logoutUser();
    this.router.navigate(['/login']);
  }


=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
}
