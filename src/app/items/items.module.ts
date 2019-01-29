import { NgModule } from '@angular/core';
import {MyItemsComponent} from "./my-items/my-items.component";
import {AddFoundItemComponent} from "./add-found-item/add-found-item.component";
import {AddLostItemComponent} from "./add-lost-item/add-lost-item.component";
import {SearchItemsComponent} from "./search-items/search-items.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import { LostItemsListComponent } from './shared/lost-items-list/lost-items-list.component';
import { FoundItemsListComponent } from './shared/found-items-list/found-items-list.component';

@NgModule({
  declarations: [
    SearchItemsComponent,
    AddLostItemComponent,
    AddFoundItemComponent,
    MyItemsComponent,
    LostItemsListComponent,
    FoundItemsListComponent
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
