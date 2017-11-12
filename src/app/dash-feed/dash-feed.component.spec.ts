import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFeedComponent } from './dash-feed.component';

describe('DashFeedComponent', () => {
	let component: DashFeedComponent;
	let fixture: ComponentFixture<DashFeedComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashFeedComponent],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashFeedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
