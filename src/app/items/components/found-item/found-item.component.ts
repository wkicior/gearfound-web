import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FoundItem} from "../../model/found-item";
import {ActivatedRoute} from "@angular/router";
import {FoundItemService} from "../../services/found-item.service";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-found-item',
  templateUrl: './found-item.component.html',
  styleUrls: ['./found-item.component.scss']
})
export class FoundItemComponent implements OnInit {
  foundItem$: Observable<FoundItem>;

  constructor(private foundItemService: FoundItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.foundItem$ = this.foundItemService.getFoundItemById(id).pipe(share());
  }
}
