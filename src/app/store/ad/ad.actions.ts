import { createAction, props } from '@ngrx/store';
import { Ad } from '../../models/ad.model';
import { AdLogFilter } from '../../models/ad-log-filter.model';

export const addAd = createAction(
	'[Ad Effects] New Ad',
	props<{ ad: Ad }>()
);

export const hideAd = createAction(
	'[Ad Effects] Hide Ad',
	props<{ ad: Ad }>()
);

export const updateLogFilters = createAction(
	'[Ad Effects] Hide Ad',
	props<{ filter: Partial<AdLogFilter> }>()
);
