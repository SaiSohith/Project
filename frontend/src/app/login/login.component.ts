import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data;
  public err;
  Login: FormGroup=this.fb.group(
    {
      user : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]]
    }
  )
  constructor(private fb: FormBuilder, private router: Router, private Product: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const email=this.Login.get('user').value;
    const password=this.Login.get('password').value;
    this.Product.Login(email,password)
    .subscribe((details) => {this.data=details;console.log(details);this.err=null,this.Move()}, (errMes) => {this.err=errMes;this.data=null;this.Move()});
  }

  Move()
  {
    if(this.data!=null&& this.err==null)
    {
      this.Product.user=this.data;
      this.router.navigate(['']);
    }
    else
    {
      alert("invalid details");
    }
  }

  already()
  {
    this.router.navigate(['/signin']);
  }

}
