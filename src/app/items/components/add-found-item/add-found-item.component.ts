import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoundItemService} from "../../services/found-item.service";
import {FoundItemBuilder} from "../../model/found-item";
import {FoundItemForm} from "./found-item-form";


@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-found-item.component.html',
  styleUrls: ['./add-found-item.component.scss']
})
export class AddFoundItemComponent implements OnInit {
  foundItemForm = new FoundItemForm();
  now = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private foundItemService: FoundItemService) { }

  ngOnInit() {
    this.foundItemForm.patchValue({'serialNumber': this.route.snapshot.paramMap.get('searchPhrase')});
  }

  save() {
    this.foundItemService.save(FoundItemBuilder.fromFoundItemForm(this.foundItemForm))
      .subscribe(() => this.router.navigate(['']));
  }
}
