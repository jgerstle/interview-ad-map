import { Component, Input, OnInit } from '@angular/core';
import { Ad } from '../../models/ad.model';

@Component({
	selector: 'app-ad-log-item',
	templateUrl: './ad-log-item.component.html',
	styleUrls: ['./ad-log-item.component.scss']
})
export class AdLogItemComponent implements OnInit {
	@Input() ad: Ad;

	constructor() { }

	ngOnInit() {
	}

}
