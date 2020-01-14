import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { adReducer, AdState } from './ad/ad.reducer';

export interface AppState {
	ad: AdState;
}

export const reducers: ActionReducerMap<AppState> = {
	ad: adReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
