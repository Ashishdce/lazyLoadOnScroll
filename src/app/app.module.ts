import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { DynamicDirective } from './directives/dynamic.directive';

import { TriggerService}  from './services/trigger.service';
import { ScrollService } from './services/scroll.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [AppComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent],
  providers: [TriggerService, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
