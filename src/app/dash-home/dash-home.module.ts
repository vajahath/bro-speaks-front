import { NgModule } from '@angular/core';

// ng-material module imports
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

// app modules

// app components
import { DashHomeComponent } from './dash-home.component';

@NgModule({
	imports: [MatButtonModule, MatListModule],
	declarations: [DashHomeComponent],
	providers: []
})
export class DashHomeModule {}
