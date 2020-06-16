import { PostService } from './post.service';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Paper } from '../base/post/paper.post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FirePost implements PostService {

    public postUrl: string;
    public _postList: AngularFireList<any>;
    public _posts: Paper[];

    constructor(private _angularFireDatabase: AngularFireDatabase) {}

    public getPosts() : Observable<Paper[]>{
        this._postList = this._angularFireDatabase.list('posts');
        return this._postList.valueChanges();
    }
}
