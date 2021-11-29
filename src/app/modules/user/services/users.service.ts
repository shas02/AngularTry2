import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/app/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any>(urls.users)
  }
  getUser(id: string): Observable<any> {
    return this.httpClient.get<any>(urls.users + '/' + id)
  }
}
