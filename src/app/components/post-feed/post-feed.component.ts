import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../shared/models/post";
import { PostComponent } from '../post/post.component';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  @Input() postCreated = new Input();
  posts: Post[];

  constructor(private postService : PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(postToRemove: Post) {
    this.posts = this.posts.filter(post => post != postToRemove);
  }
}
