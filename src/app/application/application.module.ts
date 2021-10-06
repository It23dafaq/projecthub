import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './routes/application-routing.module';
import { AppOverviewContainerComponent } from './containers/app-overview-container/app-overview-container.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppOverviewContainerComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class ApplicationModule { }
