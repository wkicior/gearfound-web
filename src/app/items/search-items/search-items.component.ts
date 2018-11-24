import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {
  searchPhrase: string = '';
  searchResult$: Observable<any[]>;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
  }

  search() {
    this.searchResult$ = this.itemService.search(this.searchPhrase);
  }

  addLostItem() {
    return this.router.navigate(['add-lost-item', {'searchPhrase': this.searchPhrase}])
  }

  addFoundItem() {

  }

  addOwnedItem() {

  }
}
