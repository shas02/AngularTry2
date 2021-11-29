import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: any;

  @Output()
  commentLift = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  choseComment() {
    this.commentLift.emit(this.comment);
  }
}
