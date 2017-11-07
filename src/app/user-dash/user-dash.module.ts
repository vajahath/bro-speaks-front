import { NgModule } from '@angular/core';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// app modules
import { UserDashRoutingModule } from './user-dash-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';

// app components
import { UserDashComponent } from './user-dash.component';
import { AddJokesComponent } from './add-jokes/add-jokes.component';

@NgModule({
	imports: [MatToolbarModule, MatButtonModule, UserDashRoutingModule],
	declarations: [DashHomeComponent, UserDashComponent, AddJokesComponent],
	providers: []
})
export class UserDashModule {}
