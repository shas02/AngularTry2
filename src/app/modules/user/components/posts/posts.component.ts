import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../interfaces';
import { PostService } from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getByUserId(id).subscribe(value => this.posts = value);
    })
  }

  ngOnInit(): void {
  }

}
