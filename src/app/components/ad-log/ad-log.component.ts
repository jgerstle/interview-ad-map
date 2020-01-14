import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ad } from '../../models/ad.model';

@Component({
	selector: 'app-ad-log',
	templateUrl: './ad-log.component.html',
	styleUrls: ['./ad-log.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdLogComponent implements OnInit {
	@Output() startChange = new EventEmitter<string>();
	@Output() endChange = new EventEmitter<string>();
	@Input() ads: Ad[];

	constructor() { }

	ngOnInit() {
	}
}
