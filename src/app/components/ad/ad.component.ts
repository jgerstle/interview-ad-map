import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Ad } from '../../models/ad.model';

@Component({
	selector: 'app-ad',
	templateUrl: './ad.component.html',
	styleUrls: ['./ad.component.scss']
})
export class AdComponent implements AfterViewInit {
	@Input() ad: Ad;
	@ViewChild('video', {static: false}) videoElement: ElementRef<HTMLVideoElement>;

	constructor() { }

	ngAfterViewInit() {
		// video muting doesn't work when adding to html later:
		// https://stackoverflow.com/questions/14111917/html5-video-muted-but-still-playing
		if (this.videoElement) {
			this.videoElement.nativeElement.muted = true;
		}
	}

}
