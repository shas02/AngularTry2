import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { ResolveService } from './services/resolve.service';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {data: ResolveService}},
  {path: ':id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
