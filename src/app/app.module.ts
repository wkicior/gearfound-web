import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { SearchItemsComponent } from './items/search-items/search-items.component';
import { AddLostItemComponent } from './items/add-lost-item/add-lost-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddFoundItemComponent} from "./items/add-found-item/add-found-item.component";
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";
import {SignUpComponent} from "./users/sign-up/sign-up.component";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SignUpComponent,
    SearchItemsComponent,
    AddLostItemComponent,
    AddFoundItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
