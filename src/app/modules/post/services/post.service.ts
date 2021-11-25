import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {urls} from '../../user/constants/urls';
import { IPost } from '../interfaces';
;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getPost(id: string): Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + '/' + id);
  }

  getByUserId(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts, {
      params: new HttpParams({
        fromObject: {
          userId
        }
      })
    })
  }

}
