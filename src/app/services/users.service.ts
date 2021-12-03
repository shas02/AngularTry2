import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(id: string): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users/' + id)
  }
}
