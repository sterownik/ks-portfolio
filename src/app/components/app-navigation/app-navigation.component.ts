import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
})
export class AppNavigationComponent implements OnInit {
  scrollFn(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}
}
