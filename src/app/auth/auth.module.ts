import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, InfoCardComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatCardModule
    
    
  ]
})
export class AuthModule { }
