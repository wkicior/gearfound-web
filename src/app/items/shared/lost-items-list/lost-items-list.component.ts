import {Component, Input, OnInit} from '@angular/core';
import {LostItem} from "../../lost-item";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lost-items-list',
  templateUrl: './lost-items-list.component.html',
  styleUrls: ['./lost-items-list.component.scss']
})
export class LostItemsListComponent implements OnInit {

  @Input() lostItems$: Observable<LostItem[]>;

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
