import { NgModule } from '@angular/core';

import { UserDashRoutingModule } from './user-dash-routing.module';
import { UserDashComponent } from './user-dash.component';

import { AddJokesComponent } from './add-jokes/add-jokes.component';

@NgModule({
	imports: [UserDashRoutingModule],
	declarations: [UserDashComponent, AddJokesComponent],
	providers: []
})
export class UserDashModule {}
