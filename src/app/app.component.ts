import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookface';

  constructor(private postService: PostService) {
  }

  ngOnInit() {

  }
}
