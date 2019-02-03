import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LostItem} from "../../model/lost-item";
import {LostItemService} from "../../services/lost-item.service";
import {FoundItemService} from "../../services/found-item.service";
import {FoundItem} from "../../model/found-item";

@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-found-item.component.html',
  styleUrls: ['./add-found-item.component.scss']
})
export class AddFoundItemComponent implements OnInit {
  item: FoundItem;

  constructor(private router: Router, private route: ActivatedRoute, private foundItemService: FoundItemService) { }

  ngOnInit() {
    this.item = {
      serialNumber: this.route.snapshot.paramMap.get('searchPhrase'),
      name: '',
      foundPlace: '',
      foundDate: null,
      description: ''}
  }

  save() {
    this.foundItemService.save(this.item).subscribe(() => this.router.navigate(['']));
  }
}
