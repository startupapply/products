import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [MatCardModule, NgIf, AsyncPipe],
  declarations: [DetailComponent],
  providers: [],
  exports: [DetailComponent]
})
export class DetailComponentModule {
}
