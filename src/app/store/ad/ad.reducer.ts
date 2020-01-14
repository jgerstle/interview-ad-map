import { createReducer, on } from '@ngrx/store';
import { Ad } from '../../models/ad.model';
import { addAd, hideAd, updateLogFilters } from './ad.actions';
import { AdLogFilter } from '../../models/ad-log-filter.model';

export interface AdState {
	ads: Ad[];
	logFilter: AdLogFilter;
}

export const initialState: AdState = {
	ads: [],
	logFilter: {
		start: 0,
		end: Number.MAX_SAFE_INTEGER
	}
};

export const adReducer = createReducer(
	initialState,
	on(addAd, (state, action) => ({ ...state, ads: [...state.ads, action.ad] })),
	on(hideAd, (state, action) => {
		const index = state.ads.indexOf(action.ad);
		const newAd = { ...action.ad, hidden: true };
		const ads = [...state.ads];
		ads[index] = newAd;
		return {
			...state,
			ads
		};
	}),
	on(updateLogFilters, (state, action) => ({ ...state, logFilter: { ...state.logFilter, ...action.filter } }))
);

export const getAds = (state: AdState) => state.ads;
