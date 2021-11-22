import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivatorService implements CanDeactivate<boolean>, CanActivate {

  constructor() {
  }

  canActivate(): boolean {
    return confirm('proceed?');
    }

  canDeactivate(): boolean {
        return confirm('leave out?');
    }
}
