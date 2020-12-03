import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
<<<<<<< HEAD
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'cart', component : CartComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]} ,
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]}
=======
const routes: Routes = [
  { path: 'cart', component : CartComponent },
  { path: '', component: HomeComponent} ,
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent}
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const routingComponents = [ HomeComponent , CartComponent, LoginComponent, SigninComponent , AdminComponent];
=======
export const routingComponents = [ HomeComponent , CartComponent, LoginComponent, SigninComponent ];
>>>>>>> ce36a75f80df4f43a695069f4564865536c640cf
