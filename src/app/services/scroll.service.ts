import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { throttler } from '../throttler';

const BUFFER_TIME = 100;

@Injectable()
export class ScrollService {
	private _subj: Subject<Event> = new Subject();
	private boundSet = new Set<EventTarget>();
	private handler: EventListener;

	/**
	 * Throttled Scroll Event of bound targets
	 */
	public onScroll: Observable<Event>;

	constructor() {
		this.handler = ScrollService._handler.bind(this);
		this.onScroll = this._subj.throttleTime(BUFFER_TIME).share();
		this.bind(window);
	}

	/**
	 * Binds its listener to the event target
	 * to trigger checking position of in-view directive
	 * or for emiting its scroll events
	 * 
	 * Returns the unbinding function
	 */
	public bind(target: EventTarget): Function {
		if (!this.boundSet.has(target)) {
			target.addEventListener('scroll', this.handler);
			this.boundSet.add(target);
		}

		return this.unbind.bind(this, target);
	}

	/**
	 * Removes its listener from the target
	 */
	public unbind(target: EventTarget):void {
		this.boundSet.delete(target);
		target.removeEventListener('scroll', this.handler);
	}

	private static _handler(this: ScrollService, e:Event):void {
		this._subj.next(e);
	}
}