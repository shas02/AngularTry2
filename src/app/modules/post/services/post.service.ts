import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any>(urls.posts)
  }
  getPost(id: string): Observable<any> {
    return this.httpClient.get<any>(urls.posts + '/' + id)
  }
}
