import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectService {

  username = new BehaviorSubject<string>('guest')

  constructor() { }
}
