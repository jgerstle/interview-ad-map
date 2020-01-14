import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { AdState } from './store/ad/ad.reducer';
import { select, Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';
import { Ad } from './models/ad.model';
import { selectAdLog, selectVisibleAds } from './store/ad/ad.selectors';
import { AdLogComponent } from './components/ad-log/ad-log.component';
import { updateLogFilters } from './store/ad/ad.actions';
import { debounce } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {
	@ViewChild(AdLogComponent, { static: true }) adLogComponent: AdLogComponent;
	ads$: Observable<Ad[]>;
	adLog$: Observable<Ad[]>;
	subscription = new Subscription();

	constructor(private store: Store<AdState>) {
		this.ads$ = store.pipe(select(selectVisibleAds));
		this.adLog$ = store.pipe(select(selectAdLog));
	}

	ngAfterViewInit() {
		this.subscription.add(
			this.adLogComponent.startChange
				.pipe(debounce(() => interval(500)))
				.subscribe(start =>
					this.store.dispatch(updateLogFilters({ filter: { start: parseInt(start, 10) || 0 } }))
				)
		);
		this.subscription.add(
			this.adLogComponent.endChange
				.pipe(debounce(() => interval(500)))
				.subscribe(end =>
					this.store.dispatch(updateLogFilters({ filter: { end: parseInt(end, 10) || Number.MAX_SAFE_INTEGER } }))
				)
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
