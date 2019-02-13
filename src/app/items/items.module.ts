import { NgModule } from '@angular/core';
import {MyItemsComponent} from "./components/my-items/my-items.component";
import {AddFoundItemComponent} from "./components/add-found-item/add-found-item.component";
import {AddLostItemComponent} from "./components/add-lost-item/add-lost-item.component";
import {SearchItemsComponent} from "./components/search-items/search-items.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import { LostItemsListComponent } from './components/shared/lost-items-list/lost-items-list.component';
import { FoundItemsListComponent } from './components/shared/found-items-list/found-items-list.component';
import { LostItemComponent } from './components/lost-item/lost-item.component';
import { FoundItemComponent } from './components/found-item/found-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    SearchItemsComponent,
    AddLostItemComponent,
    AddFoundItemComponent,
    MyItemsComponent,
    LostItemsListComponent,
    FoundItemsListComponent,
    LostItemComponent,
    FoundItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ItemsModule { }
