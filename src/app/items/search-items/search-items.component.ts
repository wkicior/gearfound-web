import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LostItemService} from "../lost-item.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {
  searchPhrase: string = '';
  searchResult$: Observable<any[]>;

  constructor(private router: Router, private lostItemService: LostItemService) { }

  ngOnInit() {
  }

  search() {
    this.searchResult$ = this.lostItemService.search(this.searchPhrase);
  }

  addLostItem() {
    return this.router.navigate(['add-lost-item', {'searchPhrase': this.searchPhrase}])
  }

  addFoundItem() {

  }

  addOwnedItem() {

  }
}
