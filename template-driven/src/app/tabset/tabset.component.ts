import { Component, ContentChild, HostListener, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html'
})
export class TabsetComponent implements AfterContentInit {

  tabs: TabComponent[] = [];

  @ContentChild('selectedTab', {static: true}) selectedTab: TabComponent;

  constructor() {
  }

  ngAfterContentInit() {
    this.selectTab(this.selectedTab);
  }

  add(tab: TabComponent) {
    this.tabs.push(tab);
  }

  selectTab(selectedTab: TabComponent | number) {

    if (typeof selectedTab === 'number') {
      selectedTab = this.tabs[selectedTab];
    }

    if (selectedTab) {
      this.tabs.forEach(tab => tab.hide());
      selectedTab.show();
    }
  }

  remove(tabComponent: TabComponent) {
    const position = this.tabs.indexOf(tabComponent);
    if (position > -1) {
      this.tabs.splice(position, 1);

      const newSelectedPosition = Math.min(position, this.tabs.length - 1);
      this.selectTab(newSelectedPosition);
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKey(event: KeyboardEvent) {

    let digit = this.getDigitFromEvent(event);

    if (digit === 0) {
      digit = 10;
    }

    this.selectTab(digit - 1);
  }

  private getDigitFromEvent(event: KeyboardEvent) {

    const code = event.code;
    const keyCode = event.keyCode;

    if (code && code.startsWith('Digit')) {

      return parseInt(code.replace('Digit', ''));
    } else if (keyCode && keyCode >= 47 && keyCode <= 57) {

      return keyCode - 48;
    } else {
      return;
    }

  }
}
