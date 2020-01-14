import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { adDispatcher } from 'ubimo-fed-home-assigment';
import { delay, map } from 'rxjs/operators';
import { addAd, hideAd } from './ad.actions';

@Injectable()
export class AdEffects {
	constructor(private actions$: Actions) {}

	@Effect()
	addAd$ = this.actions$.pipe(
		ofType(addAd),
		delay(5000),
		map(action => hideAd({ ad: action.ad }))
	);

	@Effect()
	init$ = adDispatcher.adEvents$.pipe(
		map(event => addAd({ ad: { ...event, created: Date.now() } }))
	);
}
