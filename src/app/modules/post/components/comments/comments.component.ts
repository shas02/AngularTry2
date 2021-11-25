import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../interfaces';
import { CommentService } from '../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getByPostId(id).subscribe(value => this.comments = value)
    })
  }

  ngOnInit(): void {
  }


}
