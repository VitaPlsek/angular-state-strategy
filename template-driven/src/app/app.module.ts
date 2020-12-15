import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabsetComponent } from './tabset/tabset.component';
import { LoremIpsumService } from './lorem-ipsum.service';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoremIpsumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
