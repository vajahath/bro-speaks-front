import { NgModule } from '@angular/core';

// ng-material module imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app modules

// app components
import { JokeCardComponent } from './joke-card.component';

@NgModule({
	imports: [MatButtonModule, MatCardModule],
	declarations: [JokeCardComponent],
	providers: [],
	exports: [JokeCardComponent]
})
export class JokeCardModule {}
