import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from "../shared/components/vmessages/vmessage.module";
import { SignUpComponent } from "./signup/signup.component";

@NgModule({
  declarations: [ 
    SignInComponent,
    SignUpComponent 
  ], // we don't use export because it's page scope (not inside another component)
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }