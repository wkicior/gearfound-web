import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { SearchItemsComponent } from './items/search-items/search-items.component';
import { AddLostItemComponent } from './items/add-lost-item/add-lost-item.component';
import { MyItemsComponent } from "./items/my-items/my-items.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AddFoundItemComponent} from "./items/add-found-item/add-found-item.component";
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";
import {SignUpComponent} from "./users/sign-up/sign-up.component";
import {LogInComponent} from "./users/log-in/log-in.component";
import {
  AuthenticationTokenInterceptor,
  TOKEN_INTERCEPTOR_URL_WHITELIST
} from "./auth/authentication-token-interceptor.service";
import {AuthenticationRefreshTokenInterceptor} from "./auth/authentication-refresh-token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SignUpComponent,
    LogInComponent,
    SearchItemsComponent,
    AddLostItemComponent,
    AddFoundItemComponent,
    MyItemsComponent
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
  providers: [
    {
      provide: TOKEN_INTERCEPTOR_URL_WHITELIST,
      useValue: ['http://localhost:8080/api/items'],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationRefreshTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationTokenInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
