import { Component, OnInit } from '@angular/core';
import {SearchItemsService} from "./search-items.service";
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

  constructor(private router: Router, private searchItemsService: SearchItemsService) { }

  ngOnInit() {
  }

  search() {
    this.searchResult$ = this.searchItemsService.search(this.searchPhrase);
  }

  addLostItem() {
    return this.router.navigate(['add-lost-item', {'searchPhrase': this.searchPhrase}])
  }

  addFoundItem() {

  }

  addOwnedItem() {

  }
}
