import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LostItemService} from "../lost-item.service";
import {LostItem} from "../lost-item";
import {FoundItem} from "../found-item";
import {FoundItemService} from "../found-item.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {
  searchPhrase: string = '';
  lostItemsSearchResult$: Observable<LostItem[]>;
  foundItemsSearchResult$: Observable<FoundItem[]>

  constructor(private router: Router,
              private lostItemService: LostItemService,
              private foundItemService: FoundItemService) { }

  ngOnInit() {
  }

  search() {
    this.lostItemsSearchResult$ = this.lostItemService.search(this.searchPhrase);
    this.foundItemsSearchResult$ = this.foundItemService.search(this.searchPhrase);
  }

  addLostItem() {
    return this.router.navigate(['add-lost-item', {'searchPhrase': this.searchPhrase}])
  }

  addFoundItem() {
    return this.router.navigate(['add-found-item', {'searchPhrase': this.searchPhrase}])
  }

  addOwnedItem() {

  }
}
