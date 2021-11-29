import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostService} from '.';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<any> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const postId = route.params['id'];
    return this.postService.getPost(postId);
  }
}
