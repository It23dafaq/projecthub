import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppOverviewContainerComponent } from '../containers/app-overview-container/app-overview-container.component';

const routes: Routes = [{ path: '', component: AppOverviewContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
