import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import {Comment} from 'src/app/models/Comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value);

    })
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => {
      this.comments = value;
    })
  }

}
