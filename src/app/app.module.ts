import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comments/comment/comment.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/users/user/user-details/user-details.component';
import {PostDetailsComponent} from './components/posts/post/post-details/post-details.component';
import { DeactivatorService } from './services/deactivator.service';
import { ResolveService } from './services/resolve.service';
import { CommponentDetailsComponent } from './components/comments/comment/commponent-details/commponent-details.component';

let routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}},
  {path: 'comments/:id', component: CommponentDetailsComponent, canActivate: [DeactivatorService]},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommponentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
