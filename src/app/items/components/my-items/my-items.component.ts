import { Component, OnInit } from '@angular/core';
import {LostItem} from "../../model/lost-item";
import {Observable} from "rxjs";
import {FoundItem} from "../../model/found-item";
import {FoundItemService} from "../../services/found-item.service";
import {LostItemService} from "../../services/lost-item.service";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  lostItems$: Observable<LostItem[]>;
  foundItems$: Observable<FoundItem[]>;

  constructor(private lostItemService: LostItemService,
               private foundItemService: FoundItemService) { }

  ngOnInit() {
    this.lostItems$ = this.lostItemService.userItems().pipe(share());
    this.foundItems$ = this.foundItemService.userItems().pipe(share());
  }

}
