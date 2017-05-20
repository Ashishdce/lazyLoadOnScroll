import { Component, ViewChildren, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChildren(DynamicDirective, {read : ViewContainerRef}) elements;

  // We will comeup with something else,
  // for now its just for illustrating the concept
  componentObj = {
    1: FirstComponent,
    2: SecondComponent,
    3: ThirdComponent,
    4: FourthComponent,
    5: FifthComponent
  };

  loadComponent;
  constructor(private factory: ComponentFactoryResolver){}

  handle(num){
    this.loadComponent = this.factory.resolveComponentFactory(this.componentObj[num]);
    this.elements._results[num - 1].createComponent(this.loadComponent);
  }

}
