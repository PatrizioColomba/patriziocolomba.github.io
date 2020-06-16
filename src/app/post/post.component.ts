import { Component, OnInit } from '@angular/core';
import { HttpClientPostService } from '../services/http-client-post.service';
import { Paper } from '../base/post/paper.post';
import { PostService } from '../services/post.service';
import { environment } from 'src/environments/environment';
import { FirePost } from '../services/fire-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public _posts: Paper[];

  constructor(private _postService: HttpClientPostService, private _fireService: FirePost) {
    this._posts = [];
  }

  ngOnInit(): void {
    this.getPosts(environment.production ? this._fireService : this._postService);
  }

  public getPosts(postService: PostService): void {
    postService.getPosts().subscribe((data: Paper[]) => {
      data.forEach(element => {
        this._posts.push(new Paper(element.id, element.title, element.text, new Date(element.created)));
        this._posts.reverse();
      });
    });
  }

}
