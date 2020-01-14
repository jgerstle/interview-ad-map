import { IAdEvent } from 'ubimo-fed-home-assigment';

export interface Ad extends IAdEvent {
	created: number;
	hidden?: boolean;
}
