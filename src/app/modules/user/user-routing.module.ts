import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { PostResolveService, ResolveService } from './services';


const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {data: ResolveService}},
  {path: ':id', component: UserDetailsComponent, children: [
      {path: ':id', component: PostsComponent, resolve: {data: PostResolveService}}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
