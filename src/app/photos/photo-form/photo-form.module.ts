import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { PhotoFormComponent } from "./photo-form.component";
import { VMessageModule } from "../../shared/components/vmessages/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ],
  declarations: [PhotoFormComponent]
})
export class PhotoFormModule {}
