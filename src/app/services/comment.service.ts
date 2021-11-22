import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {

  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url)
  }

  getComment(id: string): Observable<Comment> {
    return this.httpClient.get<Comment>(this.url + '/' + id);
  }
}
