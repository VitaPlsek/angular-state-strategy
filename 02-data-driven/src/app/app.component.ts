import { Component, HostBinding, HostListener } from '@angular/core';
import { TabData } from './model/tabData';
import { LoremIpsumService } from './lorem-ipsum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  dynamicTabs: TabData[] = [];
  selectedTab: TabData;

  constructor(private lorem: LoremIpsumService) {

    this.addTab();
    this.addTab();
  }

  @HostListener('document:keyup', ['$event'])
  onKey(event: KeyboardEvent) {

    let digit = this.getDigitFromEvent(event);

    if (digit === 0) {
      digit = 10;
    }

    if (this.dynamicTabs[digit - 1]) {
      this.selectedTab = this.dynamicTabs[digit - 1];
    }
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
    this.dynamicTabs.push(this.createRandomTab());

    if (!this.selectedTab) {
      this.selectedTab = this.dynamicTabs[0];
    }
  }

  removeTab(tabData: TabData) {
    const index = this.dynamicTabs.indexOf(tabData);
    this.dynamicTabs.splice(index, 1);

    if (this.selectedTab === tabData) {
      const newIndex = Math.min(index, this.dynamicTabs.length - 1);
      this.selectedTab = this.dynamicTabs[newIndex] || null;
    }
  }

  private createRandomTab(): TabData {
    return {
      header: this.lorem.generateWords(2),
      text: this.lorem.generateWords(50)
    };
  }
}
