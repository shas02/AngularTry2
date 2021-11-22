import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Comment} from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-commponent-details',
  templateUrl: './commponent-details.component.html',
  styleUrls: ['./commponent-details.component.css']
})
export class CommponentDetailsComponent implements OnInit {

  comment: Comment | any;

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params['id']).subscribe(value => this.comment = value);
    })
  }

  ngOnInit(): void {
  }

}
