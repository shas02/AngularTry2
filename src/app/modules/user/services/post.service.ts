import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
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
