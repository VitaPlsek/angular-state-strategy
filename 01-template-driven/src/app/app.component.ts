import { Component, OnInit } from '@angular/core';
import { TabData } from './model/tabData';
import { LoremIpsumService } from './lorem-ipsum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  dynamicTabs = new Set<TabData>();

  constructor(private lorem: LoremIpsumService) {
  }

  ngOnInit() {
    this.addTab();
    this.addTab();
  }

  addTab() {
    this.dynamicTabs.add(this.createRandomTab());
  }

  removeTab(tabData: TabData) {
    this.dynamicTabs.delete(tabData);
  }

  private createRandomTab(): TabData {
    return {
      header: this.lorem.generateWords(2),
      text: this.lorem.generateWords(50)
    };
  }
}
