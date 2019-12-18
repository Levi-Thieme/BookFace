import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post';
import { Comment } from '../shared/models/comment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private createdPost: Subject<Post>;

  constructor() {
    this.createdPost = new Subject<Post>();
  }

  getCreatedPosts(): Observable<Post> {
    return this.createdPost.asObservable();
  }

  addPost(post: Post) {
    this.createdPost.next(post);
  }
}