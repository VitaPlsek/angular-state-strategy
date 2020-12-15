import { Injectable } from '@angular/core';
import { LoremIpsumService } from './lorem-ipsum.service';
import { range } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import * as R from 'ramda';
import { TabData } from './model/tabData';

@Injectable({
  providedIn: 'root'
})
export class TabsetService {

  constructor(private loremIpsumService: LoremIpsumService) {
  }

  loadTabs() {
    const length = Math.ceil(Math.random() * 10);
    return range(1, length)
      .pipe(
        map(() => this.loremIpsumService.createRandomTab()),
        reduce<TabData, TabData[]>((acc, tab) => R.append(tab, acc), [])
      );

  }
}
