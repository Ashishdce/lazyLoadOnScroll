import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { DynamicDirective } from './dynamic.directive';

import { TriggerService}  from './trigger.service';
import { ScrollService } from './scroll.service';


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
