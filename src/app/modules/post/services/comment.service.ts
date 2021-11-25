import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../../user/constants/urls';
import { IComment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }

  getByPostId(postId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments, {
      params: new HttpParams({
        fromObject: {
          postId
        }
      })
    })
  }
}
