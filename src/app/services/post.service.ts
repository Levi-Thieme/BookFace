import { Injectable } from '@angular/core';
import { Post } from '../shared/models/post';
import { Comment } from '../shared/models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    let posts: Post[] = [];
    let comments = [new Comment("Jim", "I like this."), new Comment("Tim", "I really don't like this post!")];
    posts.push(new Post("Bob", "Sunday @ 5:31pm", "This is neat.", comments));
    posts.push(new Post("Janet", "Friday @ 3:03am", "This is mediocre.", []));
    posts.push(new Post("Darlene", "Tuesday @ 1:30pm", "I have the oldest post.", []));
    return posts;
  }
}
