import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LostItem} from "../../model/lost-item";
import {LostItemService} from "../../services/lost-item.service";

@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-lost-item.component.html',
  styleUrls: ['./add-lost-item.component.scss']
})
export class AddLostItemComponent implements OnInit {
  item: LostItem;

  constructor(private router: Router, private route: ActivatedRoute, private lostItemService: LostItemService) { }

  ngOnInit() {
    this.item = {
      id: null,
      serialNumber: this.route.snapshot.paramMap.get('searchPhrase'),
      name: '',
      lostPlace: '',
      lostDate: null,
      description: ''}
  }

  save() {
    this.lostItemService.save(this.item).subscribe(() => this.router.navigate(['']));
  }
}