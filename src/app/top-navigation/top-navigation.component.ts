import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  isResponsive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
   this.isResponsive = !this.isResponsive;
  }
}
