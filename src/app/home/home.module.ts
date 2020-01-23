import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./signin/signin.component";
import { VMessageModule } from "../shared/components/vmessages/vmessage.module";

@NgModule({
  declarations: [ SignInComponent ], // we don't use export because it's page scope (not inside another component)
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }