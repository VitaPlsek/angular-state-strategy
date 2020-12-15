import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabData } from './model/tabData';
import * as R from 'ramda';
import { LoremIpsumService } from './lorem-ipsum.service';


@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabs = new BehaviorSubject<TabData[]>([]);
  $tabs = this.tabs.asObservable();

  private selectedTab = new BehaviorSubject<TabData>(null);
  $selectedTab = this.selectedTab.asObservable();

  constructor(private loremIpsumService: LoremIpsumService) {

  }

  addRandomTab() {
    const tabs = R.append(this.createRandomTab(), this.tabs.value);
    this.tabs.next(tabs);

    if (!this.selectedTab.value) {
      this.selectByPosition(1);
    }
  }

  removeTab(tabData: TabData) {
    const tabs = R.without([tabData], this.tabs.value);
    const index = this.tabs.value.indexOf(tabData);
    this.tabs.next(tabs);

    if (this.selectedTab.value === tabData) {
      this.selectByPosition(index);
    }
  }

  private createRandomTab(): TabData {
    return {
      header: this.loremIpsumService.generateWords(2),
      text: this.loremIpsumService.generateWords(50)
    };
  }

  selectByPosition(digit: number = 1) {
    const index = Math.min(digit, this.tabs.value.length) - 1;

    const tabToSelect = this.tabs.value[index];
    this.select(tabToSelect);
  }

  select(tab: TabData) {
    this.selectedTab.next(tab);
  }
}
