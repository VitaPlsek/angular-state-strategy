import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { TabsetComponent } from '../tabset/tabset.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['tab.component.css']
})
export class TabComponent {
  @Input() header = 'Tab';
}
