import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from "../shared/components/vmessages/vmessage.module";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignUpService } from "./signup/signup.service";

@NgModule({
  declarations: [ 
    SignInComponent,
    SignUpComponent ,
    HomeComponent
  ], // we don't use export because it's page scope (not inside another component)
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [SignUpService]
})
export class HomeModule { }