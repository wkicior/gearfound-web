import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FoundItem} from "../../found-item";

@Component({
  selector: 'app-found-items-list',
  templateUrl: './found-items-list.component.html',
  styleUrls: ['./found-items-list.component.scss']
})
export class FoundItemsListComponent implements OnInit {

  @Input() foundItems$: Observable<FoundItem[]>;

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
