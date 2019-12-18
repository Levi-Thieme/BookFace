import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../../shared/models/post";
import { PostComponent } from '../post/post.component';
import {PostService} from "../../services/post.service";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  private createdPostSubscription: Subscription;
  private posts: Post[];

  constructor(private postService : PostService) {
    this.posts = [];
    //subscribes to any posts created by the user
    this.createdPostSubscription = postService.getCreatedPosts()
      .subscribe(createdPost => this.posts.push(createdPost));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.createdPostSubscription.unsubscribe();
  }

  /**
   * Returns the posts array.
   */
  public getPosts(): Post[] {
    return this.posts;
  }
}
