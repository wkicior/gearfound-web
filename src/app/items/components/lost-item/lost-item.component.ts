import { Component, OnInit } from '@angular/core';
import {LostItem} from "../../model/lost-item";
import {Observable} from "rxjs";
import {LostItemService} from "../../services/lost-item.service";
import {ActivatedRoute} from "@angular/router";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-lost-item',
  templateUrl: './lost-item.component.html',
  styleUrls: ['./lost-item.component.scss']
})
export class LostItemComponent implements OnInit {
  lostItem$: Observable<LostItem>;
  lostItemBelongsToUser$: Observable<Boolean>;
  id: string

  constructor(private lostItemService: LostItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.lostItem$ = this.lostItemService.getLostItemById(this.id).pipe(share());
    this.lostItemBelongsToUser$ = this.lostItemService.lostItemBelongsToUser(this.lostItem$);
  }
}
