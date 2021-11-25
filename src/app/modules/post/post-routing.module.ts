import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostsComponent} from './components/posts/posts.component';
import { CommentResolveService } from './services';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: ':id', component: PostDetailsComponent, children: [
      {path: ':id', component: CommentsComponent, resolve: {data: CommentResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
