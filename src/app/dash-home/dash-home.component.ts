import { Component, OnInit } from '@angular/core';
import { Joke } from './Joke';

@Component({
	selector: 'app-dash-home',
	templateUrl: './dash-home.component.html',
	styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
	joke: Joke = {
		author: 'Megan Fox',
		jokeText: 'this is bill, be like bill'
	};

	constructor() {}

	ngOnInit() {}
}
