import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsComponent} from './components/comments/comments.component';

const routes: Routes = [
  {path: '', component: CommentsComponent},
  {path: ':id', component: CommentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
