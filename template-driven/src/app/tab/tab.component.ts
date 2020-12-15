import { Component, OnInit, Input, HostBinding, forwardRef, Inject, Host, OnDestroy } from '@angular/core';
import { TabsetComponent } from '../tabset/tabset.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['tab.component.css']
})
export class TabComponent implements OnInit, OnDestroy {

  @Input() header = 'Tab';

  @HostBinding('hidden') hidden = true;

  constructor(private tabset: TabsetComponent) {
  }

  ngOnInit() {
    this.tabset.add(this);
  }

  ngOnDestroy() {
    this.tabset.remove(this);
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}
