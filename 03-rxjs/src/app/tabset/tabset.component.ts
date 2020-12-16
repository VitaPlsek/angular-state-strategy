import { Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabData } from '../model/tabData';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent {

  @Input() tabs: TabData[] = [];
  @Input() selectedTab: TabData;

  @Output() selectedTabChange = new EventEmitter<TabData>();
  @Output() tabRemoved = new EventEmitter<TabData>();

  selectTab(tab) {
    this.selectedTabChange.emit(tab);
  }

  removeTab(tab) {
    this.tabRemoved.emit(tab);
  }
}
