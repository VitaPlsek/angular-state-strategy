import { Component, HostListener } from '@angular/core';
import { TabData } from './model/tabData';
import { LoremIpsumService } from './lorem-ipsum.service';
import { Store } from '@ngrx/store';
import { State as TabsState } from './model/tabs.reducer';
import { addTab, loadTabs, removeTab, selectTab, selectTabByNumber, tabsLoaded } from './model/tabs.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  state$ = this.store.select('tabs');

  constructor(private loremIpsumService: LoremIpsumService, private store: Store<{ tabs: TabsState }>) {
    this.store.dispatch(loadTabs());
  }

  addTab() {
    this.store.dispatch(addTab({tab: this.loremIpsumService.createRandomTab()}));
  }

  removeTab(tab: TabData) {
    this.store.dispatch(removeTab({tab}));
  }

  selectTab(tab: TabData) {
    this.store.dispatch(selectTab({tab}));
  }

  @HostListener('document:keyup', ['$event'])
  onKey(event: KeyboardEvent) {

    let digit = this.getDigitFromEvent(event);

    if (digit === 0) {
      digit = 10;
    }

    this.store.dispatch(selectTabByNumber({index: digit}));
  }

  private getDigitFromEvent(event: KeyboardEvent) {

    const code = event.code;
    const keyCode = event.keyCode;

    if (code && code.startsWith('Digit')) {

      return parseInt(code.replace('Digit', ''), 10);
    } else if (keyCode && keyCode >= 47 && keyCode <= 57) {

      return keyCode - 48;
    } else {
      return;
    }
  }

}
