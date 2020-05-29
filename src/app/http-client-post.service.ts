import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Paper } from './base/post/paper.post';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientPostService extends PostService {

  constructor(private http: HttpClient) {
    super();
  }

  public getPosts():Observable<Paper[]> {
    return this.http.get<Paper[]>(this.postUrl);
  }
}
