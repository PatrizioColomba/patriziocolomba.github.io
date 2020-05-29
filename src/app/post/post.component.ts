import { Component, OnInit } from '@angular/core';
import { Post } from '../base/post/post';
import { HttpClientPostService } from '../http-client-post.service';
import { PAPERS } from '../base/post/paper.post.mock';
import { Paper } from '../base/post/paper.post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public _posts: Paper[];

  constructor(private _postService: HttpClientPostService) {
    this._posts = [];
  }

  ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): void {
    this._postService.getPosts().subscribe((data: Paper[]) => {
      data.forEach(element => {
        this._posts.push(new Paper(element.id, element.title, element.text, new Date(element.created)));
        this._posts.reverse();
      });
    });
  }

}
