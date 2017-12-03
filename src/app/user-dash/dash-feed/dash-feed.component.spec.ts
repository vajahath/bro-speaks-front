import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFeedComponent } from './dash-feed.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JokeCardModule } from '../../joke-card/joke-card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PublishJokeService } from '../publish-joke.service';
import { JokeService } from '../../joke.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashFeedComponent', () => {
	let component: DashFeedComponent;
	let fixture: ComponentFixture<DashFeedComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashFeedComponent],
				imports: [
					BrowserModule,
					FormsModule,
					BrowserAnimationsModule,

					// ng-material
					MatButtonModule,
					MatListModule,
					MatCardModule,
					MatFormFieldModule,
					MatInputModule,
					MatSnackBarModule,
					JokeCardModule,
				],
				providers: [PublishJokeService, JokeService],
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
