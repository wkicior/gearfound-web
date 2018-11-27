import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LostItem} from "../lost-item";
import {LostItemService} from "../lost-item.service";
import {FoundItemService} from "../found-item.service";
import {FoundItem} from "../found-item";

@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-found-item.component.html',
  styleUrls: ['./add-found-item.component.scss']
})
export class AddFoundItemComponent implements OnInit {
  item: FoundItem;

  constructor(private route: ActivatedRoute, private foundItemService: FoundItemService) { }

  ngOnInit() {
    this.item = {
      serialNumber: this.route.snapshot.paramMap.get('searchPhrase'),
      name: '',
      foundPlace: '',
      foundDate: null,
      description: ''}
  }

  save() {
    this.foundItemService.save(this.item).subscribe();
  }
}
