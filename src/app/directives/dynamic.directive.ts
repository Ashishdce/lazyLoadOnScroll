import { Directive, ElementRef, Output, Input, EventEmitter ,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { defer, forEach } from 'lodash';
import { TriggerService }  from '../services/trigger.service';

import { FirstComponent } from '../components/first/first.component';
import { SecondComponent } from '../components/second/second.component';
import { ThirdComponent } from '../components/third/third.component';
import { FourthComponent } from '../components/fourth/fourth.component';
import { FifthComponent } from '../components/fifth/fifth.component';

const SELECTOR = 'in-view';

@Directive({
  selector: `[${SELECTOR}]`,
	exportAs: SELECTOR
})


export class DynamicDirective {

  loadComponent=null;

  componentObj = {
    1: FirstComponent,
    2: SecondComponent,
    3: ThirdComponent,
    4: FourthComponent,
    5: FifthComponent
  };

  public event = new EventEmitter();
  private subs: Subscription;
  constructor( private trigger: TriggerService, public el: ElementRef, private factory: ComponentFactoryResolver) {}
  
  @Input() value: number;

  ngAfterViewInit() {
		defer(() => {
			this.subs = this.trigger.observable.subscribe(this.handler.bind(this));

			this.handler();
		});
	}

  private isInViewPort():boolean {
		var rect = this.el.nativeElement.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

  handle(num){
    this.loadComponent = this.factory.resolveComponentFactory(this.componentObj[num]);
    this.trigger.elementsArray._results[num - 1].createComponent(this.loadComponent);
  }

  private handler():void {
		if (this.isInViewPort()) {
        this.event.emit();
        this.handle(this.value);
        this.subs.unsubscribe();

		}
	}

}
