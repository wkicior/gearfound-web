import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TopNavigationComponent} from "./top-navigation/top-navigation.component";
import {SignUpComponent} from "./users/components/sign-up/sign-up.component";
import {LogInComponent} from "./users/components/log-in/log-in.component";
import {
  AuthenticationTokenInterceptor,
  TOKEN_INTERCEPTOR_URL_WHITELIST
} from "./auth/interceptors/authentication-token-interceptor.service";
import {AuthenticationRefreshTokenInterceptor} from "./auth/interceptors/authentication-refresh-token-interceptor.service";
import {ItemsModule} from "./items/items.module";


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SignUpComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ItemsModule
  ],
  providers: [
    {
      provide: TOKEN_INTERCEPTOR_URL_WHITELIST,
      useValue: ['http://localhost:8080/api/items', 'http://localhost:8090/user'],
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
