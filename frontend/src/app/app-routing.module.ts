import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'cart', component : CartComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]} ,
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent , CartComponent, LoginComponent, SigninComponent , AdminComponent];
