import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations: [
      AboutComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
    ],
    exports: [
      AboutComponent
    ]
  })
  export class AboutModule { }