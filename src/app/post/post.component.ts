import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { Post } from '../base/post/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private _posts: Post[];

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): Post[] {
    this._posts =  this._postService.getPosts();
    return this._posts;
  }

}
