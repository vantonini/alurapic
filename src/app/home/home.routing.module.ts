import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginGaurd } from '../core/auth/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGaurd],
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ], // all lazy loading modules need to use forChild
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }