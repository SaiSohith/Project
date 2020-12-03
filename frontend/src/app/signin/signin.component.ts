import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  details;
  err;
  SigninForm=this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    email: ['',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
    mobile: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private Product: ProductService) { }

  ngOnInit(): void {
  }
  already()
  {
    this.router.navigate(['/login']);
  }

  createAccount()
  {
    const form=this.SigninForm.value;
    this.Product.Signin(form)
<<<<<<< HEAD
    .subscribe(
      (details) => { 
        this.details=details;this.err=null;
        const object = {
          token: this.details.token,
          resp: this.details.resp[0]
        }
        localStorage.setItem('token',JSON.stringify(object));
        this.Move();
      }, 
      (errMess) => { 
        this.err=errMess;this.details=null;this.Move()
      })
=======
    .subscribe((details) => { this.details=details;this.err=null;this.Move()}, (errMess) => { this.err=errMess;this.details=null;this.Move()})
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
  }

  Move()
  {
    if(this.details!=null&& this.err==null)
    {
<<<<<<< HEAD
      this.Product.user=this.details.resp[0];
=======
      this.Product.user=this.details;
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
      this.router.navigate(['']);
    }
    else
    {
      alert("invalid");
    }
  }


}
