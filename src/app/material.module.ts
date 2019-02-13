import { NgModule } from '@angular/core';
import {MatButtonModule, MatExpansionModule, MatInputModule, MatNativeDateModule} from "@angular/material";
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatInputModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule { }
