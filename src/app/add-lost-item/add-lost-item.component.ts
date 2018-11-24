import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-lost-item',
  templateUrl: './add-lost-item.component.html',
  styleUrls: ['./add-lost-item.component.scss']
})
export class AddLostItemComponent implements OnInit {
  private searchPhrase: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchPhrase = this.route.snapshot.paramMap.get('searchPhrase')
  }

}
