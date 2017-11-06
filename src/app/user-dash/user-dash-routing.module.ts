import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddJokesComponent } from './add-jokes/add-jokes.component';
import { UserDashComponent } from './user-dash.component';

const userDashRoutes: Routes = [
	{
		path: 'u',
		component: UserDashComponent,
		children: [
			{
				path: 'add-jokes',
				component: AddJokesComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(userDashRoutes)],
	exports: [RouterModule]
})
export class UserDashRoutingModule {}