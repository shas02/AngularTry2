import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {ResolveService} from './services/resolve.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import {PostResolveService, PostService } from './services';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, ResolveService, PostService, PostResolveService]
})
export class UserModule {
}
