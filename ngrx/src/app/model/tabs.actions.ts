import { createAction, props } from '@ngrx/store';
import { TabData } from './tabData';

export const addTab = createAction(
  '[Tabs] Add tab',
  props<{ tab: TabData }>()
);
export const tabsLoaded = createAction(
  '[Tabs] Tabs succesfully loaded',
  props<{ tabs: TabData[] }>()
);

export const selectTab = createAction(
  '[Tabs] Select tab',
  props<{ tab: TabData }>()
);

export const selectTabByNumber = createAction(
  '[Tabs] Select tab by number',
  props<{ index: number }>()
);

export const removeTab = createAction(
  '[Tabs] Remove tab',
  props<{ tab: TabData }>()
);

export const loadTabs = createAction(
  '[Tabs] Load tabs from server'
);
