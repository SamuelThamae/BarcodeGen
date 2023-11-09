import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { ProfileComponent } from './profile/profile.component';
import {NgxUiLoaderConfig,NgxUiLoaderModule,SPINNER,PB_DIRECTION}from 'ngx-ui-loader';

const ngxUiLoaderConfig:NgxUiLoaderConfig={
  pbColor:"yellow",
  bgsColor:"blue",
  fgsColor:"yellow",
  fgsType:SPINNER.threeStrings,
  fgsSize:110,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:6,
  hasProgressBar: false
}

@NgModule({
  declarations: [
    UsersComponent,
    DeleteUserComponent,
    GetUserComponent,
    AllUsersComponent,
    UpdateUserComponent,
    UserActivityComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
