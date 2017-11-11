import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicJokesComponent } from './public-jokes.component';

const publicJokesRoutes: Routes = [
	{
		path: 'jokes',
		component: PublicJokesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(publicJokesRoutes)],
	exports: [RouterModule],
})
export class PublicJokesRoutingModule {}
