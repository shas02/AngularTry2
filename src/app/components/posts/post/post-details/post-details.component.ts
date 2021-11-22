import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from 'src/app/models/Post';
import {PostService} from 'src/app/services/post.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post | any;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params['id']).subscribe(value => this.post = value);
    })
  }

  ngOnInit(): void {
  }

}
