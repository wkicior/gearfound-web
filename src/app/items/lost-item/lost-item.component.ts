import { Component, OnInit } from '@angular/core';
import {LostItem} from "../lost-item";
import {Observable} from "rxjs";
import {LostItemService} from "../lost-item.service";
import {ActivatedRoute} from "@angular/router";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-lost-item',
  templateUrl: './lost-item.component.html',
  styleUrls: ['./lost-item.component.scss']
})
export class LostItemComponent implements OnInit {
  lostItem$: Observable<LostItem>;

  constructor(private lostItemService: LostItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.lostItem$ = this.lostItemService.getLostItemById(id).pipe(share());
  }

}
