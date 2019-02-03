import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchItemsComponent} from "./items/components/search-items/search-items.component";
import {AddLostItemComponent} from "./items/components/add-lost-item/add-lost-item.component";
import {AddFoundItemComponent} from "./items/components/add-found-item/add-found-item.component";
import {SignUpComponent} from "./users/components/sign-up/sign-up.component";
import {LogInComponent} from "./users/components/log-in/log-in.component";
import {MyItemsComponent} from "./items/components/my-items/my-items.component";
import {AuthenticationGuard} from "./auth/guards/authentication.guard";
import {LostItemComponent} from "./items/components/lost-item/lost-item.component";
import {FoundItemComponent} from "./items/components/found-item/found-item.component";

const routes: Routes = [
  { path: 'search', component: SearchItemsComponent },
  { path: 'lost-items/:id', component: LostItemComponent },
  { path: 'found-items/:id', component: FoundItemComponent },
  { path: 'add-lost-item', component: AddLostItemComponent, canActivate: [AuthenticationGuard] },
  { path: 'add-found-item', component: AddFoundItemComponent, canActivate: [AuthenticationGuard] },
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
