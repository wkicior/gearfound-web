import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LostItemBuilder} from "../../model/lost-item";
import {LostItemService} from "../../services/lost-item.service";
import {LostItemForm} from "./lost-item-form";

@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-lost-item.component.html',
  styleUrls: ['./add-lost-item.component.scss']
})
export class AddLostItemComponent implements OnInit {
  lostItemForm = new LostItemForm();
  now = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private lostItemService: LostItemService) { }

  ngOnInit() {
    this.lostItemForm.patchValue({'serialNumber': this.route.snapshot.paramMap.get('searchPhrase')});
  }

  save() {
    this.lostItemService.save(LostItemBuilder.fromLostItemForm(this.lostItemForm))
      .subscribe(() => this.router.navigate(['']));
  }
}
