import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchItemsComponent} from "./items/search-items/search-items.component";
import {AddLostItemComponent} from "./items/add-lost-item/add-lost-item.component";

const routes: Routes = [
  { path: 'search', component: SearchItemsComponent },
  { path: 'add-lost-item', component: AddLostItemComponent },
  { path: '', component: SearchItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
