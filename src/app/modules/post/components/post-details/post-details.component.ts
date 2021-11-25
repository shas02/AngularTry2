import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../../interfaces';
import { PostService } from '../../services';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params['id']).subscribe(value => this.post = value);
    })

  }

  ngOnInit(): void {
  }

  getComments(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }

}
