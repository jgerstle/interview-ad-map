import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ad } from '../../models/ad.model';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
	@Input() ads: Ad[];
	constructor() { }

	trackAds(created: number, ad: Ad) {
		return ad.created;
	}
}
