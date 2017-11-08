import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCardComponent } from './joke-card.component';

describe('JokeCardComponent', () => {
	let component: JokeCardComponent;
	let fixture: ComponentFixture<JokeCardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [JokeCardComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(JokeCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
