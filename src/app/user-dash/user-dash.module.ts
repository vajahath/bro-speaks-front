import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// app modules
import { UserDashRoutingModule } from './user-dash-routing.module';
import { DashHomeModule } from '../dash-home/dash-home.module';

// app components
import { UserDashComponent } from './user-dash.component';
import { AddJokesComponent } from '../add-jokes/add-jokes.component';

// app-services
import { PublishJokeService } from './publish-joke.service';

@NgModule({
	imports: [
		FormsModule,

		// ng-material
		MatFormFieldModule,
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatSnackBarModule,

		// custom
		DashHomeModule,
		UserDashRoutingModule,
	],
	declarations: [UserDashComponent, AddJokesComponent],
	providers: [PublishJokeService],
})
export class UserDashModule {}
