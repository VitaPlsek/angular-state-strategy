import { Action, createReducer, on } from '@ngrx/store';
import * as TabsActions from './tabs.actions';
import { TabData } from './tabData';
import * as R from 'ramda';

export interface State {
  tabs: TabData[];
  selected: TabData;
}

export const initialState: State = {
  tabs: [],
  selected: null
};

const addTabRecucer = (state, {tab}) => {
  const tabs = R.append(tab, state.tabs);
  return {
    tabs,
    selected: state.selected || R.head(tabs)
  };
};

const removeTabRecucer = (state, {tab}) => {
  const tabs = R.without([tab], state.tabs);

  return {
    tabs,
    selected: state.selected !== tab ? state.selected : R.last(tabs)
  };
};

const tabsReducer = createReducer<State>(
  initialState,
  on(TabsActions.addTab, addTabRecucer),
  on(TabsActions.tabsLoaded, (state, {tabs}) => ({tabs, selected: R.head(tabs)})),
  on(TabsActions.selectTab, ({tabs}, {tab: selected}) => ({tabs, selected})),
  on(TabsActions.removeTab, removeTabRecucer),
  on(TabsActions.selectTabByNumber, ({tabs}, {index}) => ({tabs, selected: tabs[index - 1] || R.last(tabs)}))
);

export function reducer(state: State | undefined, action: Action) {
  return tabsReducer(state, action);
}
