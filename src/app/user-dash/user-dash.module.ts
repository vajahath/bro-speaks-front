import { NgModule } from '@angular/core';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// app modules
import { UserDashRoutingModule } from './user-dash-routing.module';
import { DashHomeModule } from '../dash-home/dash-home.module';

// app components
import { UserDashComponent } from './user-dash.component';
import { AddJokesComponent } from '../add-jokes/add-jokes.component';

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		DashHomeModule,
		UserDashRoutingModule
	],
	declarations: [UserDashComponent, AddJokesComponent],
	providers: []
})
export class UserDashModule {}
