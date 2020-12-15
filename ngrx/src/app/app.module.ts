import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabsetComponent } from './tabset/tabset.component';
import { LoremIpsumService } from './lorem-ipsum.service';
import { StoreModule } from '@ngrx/store';
import * as tabs from './model/tabs.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TabsEffects } from './model/tabs.effects';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({tabs: tabs.reducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TabsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
