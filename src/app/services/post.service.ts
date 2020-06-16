import { Injectable } from '@angular/core';
import { Post } from '../base/post/post';
import { Observable} from 'rxjs';

export abstract class PostService {
  public postUrl: string = 'api/posts';

  abstract getPosts();
}
