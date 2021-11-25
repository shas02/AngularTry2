import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { urls } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any[]> {

  constructor(private httpClient: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpClient.get<any[]>(urls.users)
  }
}
