import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-joke-card',
	templateUrl: './joke-card.component.html',
	styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent implements OnInit {
	@Input() userName: string;
	@Input() jokeText: string;

	constructor() {}

	ngOnInit() {}
}
