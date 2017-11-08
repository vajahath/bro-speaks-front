import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dash-home',
	templateUrl: './dash-home.component.html',
	styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
	userName = 'Megan Fox';
	jokeText = 'This is Bill, Be like Bill.';

	constructor() {}

	ngOnInit() {}
}
