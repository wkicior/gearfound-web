import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {LostItem, LostItemBuilder} from "../../model/lost-item";
import {LostItemService} from "../../services/lost-item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, share} from "rxjs/operators";
import {LostItemForm} from "../add-lost-item/lost-item-form";

@Component({
  selector: 'app-edit-lost-item',
  templateUrl: './edit-lost-item.component.html',
  styleUrls: ['./edit-lost-item.component.scss']
})
export class EditLostItemComponent implements OnInit {

  lostItem$: Observable<LostItem>;
  lostItemForm = new LostItemForm();
  now = new Date();

  constructor(private lostItemService: LostItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.lostItem$ = this.lostItemService.getLostItemById(id).pipe(share());
    this.assertUserOwnsTheItem();
    this.initLostItemForm();
  }

  private initLostItemForm() {
    this.lostItem$.subscribe(i => {
      this.lostItemForm.id = i.id;
      this.lostItemForm.patchValue(
        {
          'serialNumber': i.serialNumber,
          'name': i.name,
          'lostDate': i.lostDate === null ? null : new Date(i.lostDate), //TODO: lostDate check timezone?
          'lostPlace': i.lostPlace,
          'description': i.description
        });
    });
  }

  private assertUserOwnsTheItem() {
    this.lostItemService.lostItemBelongsToUser(this.lostItem$).pipe( //TODO: move it to guard?
      filter(val => val === false)
    ).subscribe(() => this.router.navigate(['/']));
  }

  save() {
    this.lostItemService.edit(LostItemBuilder.fromLostItemForm(this.lostItemForm))
      .subscribe(() => this.router.navigate(['']));
  }

}
