import { Component, OnInit } from '@angular/core';
import { Joke } from '../Joke';
import { JOKES } from '../mock-jokes';

@Component({
	selector: 'app-dash-home',
	templateUrl: './dash-home.component.html',
	styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
	jokes: Joke[] = JOKES;

	constructor() {}

	ngOnInit() {}
}
