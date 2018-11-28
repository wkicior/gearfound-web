import { NgModule } from '@angular/core';
import {MatButtonModule, MatExpansionModule, MatInputModule} from "@angular/material";


@NgModule({
  imports: [MatButtonModule, MatInputModule, MatExpansionModule],
  exports: [MatButtonModule, MatInputModule, MatExpansionModule],
})
export class MaterialModule { }
