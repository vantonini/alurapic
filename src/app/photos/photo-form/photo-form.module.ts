import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from "../../shared/components/vmessages/vmessage.module";
import { RouterModule } from "@angular/router";
import { PhotoComponent } from "../photo/photo.component";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "../../shared/directives/immediate-click/immediate-click.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ],
  declarations: [
    PhotoFormComponent
  ]
})
export class PhotoFormModule {}
