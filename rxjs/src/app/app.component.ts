import { Component, HostListener } from '@angular/core';
import { TabData } from './model/tabData';
import { LoremIpsumService } from './lorem-ipsum.service';
import { TabService } from './tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  tabs$ = this.tabService.$tabs;
  selectedTab$ = this.tabService.$selectedTab;

  constructor(private tabService: TabService) {
    this.addTab();
    this.addTab();
  }

  @HostListener('document:keyup', ['$event'])
  onKey(event: KeyboardEvent) {

    let digit = this.getDigitFromEvent(event);

    if (digit === 0) {
      digit = 10;
    }

    this.tabService.selectByPosition(digit);
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

  addTab() {
    this.tabService.addRandomTab();
  }

  removeTab(tabData: TabData) {
    this.tabService.removeTab(tabData);
  }

  selectTab(tab: TabData) {
    this.tabService.select(tab);
  }
}
