import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from '../services/authentication.guard';
import { HasRoleGuard } from '../services/has-role.guard';

const routes: Routes = 
[
  { path: 'show',
   component: AllUsersComponent ,
   canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    role:'admin'
  } 
  },
  { path: 'editUser/:id', component: GetUserComponent,
  canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    role:'admin'  
  }
  },
  { path: 'updateUser/:id', component: UpdateUserComponent,
  canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    
    role:'admin'
  }
},
  { path: 'deleteUser/:id', component: DeleteUserComponent ,
  canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    role:'admin'
  }
},
  { path: 'activities/:id', component: UserActivityComponent ,
  canActivate:[AuthenticationGuard,HasRoleGuard],
  data:{
    role:'admin'
  }
},
  {path:'profile',component:ProfileComponent,
canActivate:[AuthenticationGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
