import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchItemsComponent} from "./items/search-items/search-items.component";
import {AddLostItemComponent} from "./items/add-lost-item/add-lost-item.component";
import {AddFoundItemComponent} from "./items/add-found-item/add-found-item.component";
import {SignUpComponent} from "./users/sign-up/sign-up.component";
import {LogInComponent} from "./users/log-in/log-in.component";
import {MyItemsComponent} from "./items/my-items/my-items.component";
import {AuthenticationGuard} from "./auth/authentication.guard";

const routes: Routes = [
  { path: 'search', component: SearchItemsComponent },
  { path: 'add-lost-item', component: AddLostItemComponent },
  { path: 'add-found-item', component: AddFoundItemComponent },
  { path: 'my-items', component: MyItemsComponent, canActivate: [AuthenticationGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: '', component: SearchItemsComponent},
  { path: '*', component: SearchItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
