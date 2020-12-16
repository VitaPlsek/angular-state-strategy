import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TabsetService } from '../tabset.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { loadTabs, tabsLoaded } from './tabs.actions';

@Injectable()
export class TabsEffects {

  loadTabs$ = createEffect(() => this.actions$.pipe(
    ofType(loadTabs),
    mergeMap(() => this.tabsetService.loadTabs()),
    map(tabs => tabsLoaded({tabs}))
    )
  );

  constructor(
    private actions$: Actions,
    private tabsetService: TabsetService
  ) {
  }
}
