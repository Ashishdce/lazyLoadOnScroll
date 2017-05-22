import { Component, ViewChildren, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { DynamicDirective } from './directives/dynamic.directive';
import { TriggerService } from './services/trigger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChildren(DynamicDirective, {read : ViewContainerRef}) elements;

  constructor(private triggerService: TriggerService, private factory: ComponentFactoryResolver){ }

  ngAfterViewInit(){
    this.triggerService.elementsArray = this.elements;
  }
  

}
