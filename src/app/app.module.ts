import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { ResolveService } from './modules/user/services/resolve.service';
import { PostResolveService } from './modules/post/services/post-resolve.service';
import { CommentResolveService } from './modules/comment/services/comment-resolve.service';

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), resolve: {data: ResolveService}},
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule), resolve: {data: PostResolveService} },
  {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule), resolve: {data: CommentResolveService}},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
