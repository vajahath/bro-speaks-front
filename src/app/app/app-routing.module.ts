import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicJokesComponent } from '../public-jokes/public-jokes.component';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'jokes', component: PublicJokesComponent },
	{ path: 'u', component: UserDashComponent },
	{ path: '', redirectTo: '/jokes', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
