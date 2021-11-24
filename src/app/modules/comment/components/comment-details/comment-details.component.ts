import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Comment} from '../../models/comment';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: Comment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params['id']).subscribe(value => this.comment = value);
    })

  }

  ngOnInit(): void {
  }

}
