import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AdEffects } from './store/ad/ad.effects';
import { MapComponent } from './components/map/map.component';
import { AdComponent } from './components/ad/ad.component';
import { AdLogComponent } from './components/ad-log/ad-log.component';
import { FormsModule } from '@angular/forms';
import { AdLogItemComponent } from './components/ad-log-item/ad-log-item.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { importIcons } from './utilities/fa-icons';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		AdComponent,
		AdLogComponent,
		AdLogItemComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([AdEffects]),
		FormsModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		importIcons(library);
	}
}
