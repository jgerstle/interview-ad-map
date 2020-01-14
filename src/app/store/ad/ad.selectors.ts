import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAds from './ad.reducer';

export const selectAdState = createFeatureSelector<fromAds.AdState>('ad');

export const selectAllAds = createSelector(
	selectAdState,
	fromAds.getAds
);

export const selectVisibleAds = createSelector(
	selectAllAds,
	(ads) => ads.filter(ad => !ad.hidden)
);

export const selectAdLog = createSelector(
	selectAdState,
	(state) =>
		state.ads.filter(ad => ad.created >= state.logFilter.start && ad.created <= state.logFilter.end)
			.sort((a, b) => b.created - a.created)
);
