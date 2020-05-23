import { Injectable } from '@angular/core';
import { Post } from './base/post/post';
import { PAPERS } from './base/post/paper.post.mock';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getPosts(): Post[] {
    return PAPERS;
  }

}
