import { faImage, faLink, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

export function importIcons(library: FaIconLibrary) {
	library.addIcons(faImage, faVideo, faLink);
}
