import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserResolveService } from './services';

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent, resolve: {user: UserResolveService}}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
