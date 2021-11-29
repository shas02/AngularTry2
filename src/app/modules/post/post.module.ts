import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostResolveService, PostService} from './services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostResolveService]
})
export class PostModule {
}
