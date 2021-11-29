import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/app-service/data-transfer.service';
import { urls } from 'src/app/constants/urls';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[];

  chosenComment: any

  constructor(private httpClient: HttpClient, private dataTransfer: DataTransferService) {
    console.log(this.dataTransfer.store.getValue());
  }

  ngOnInit(): void {
    this.httpClient.get<any[]>(urls.comments).subscribe((response)=> this.comments = response)
  }

  xxx(z: any) {
    this.chosenComment = z;
  }
}
