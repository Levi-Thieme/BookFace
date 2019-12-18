import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    contents: new FormControl('', Validators.required),
  });

  constructor(private postService: PostService) {

  }

  onSubmit() {
    const newPost = new Post(this.profileForm.value.username, new Date().toDateString(), this.profileForm.value.contents, []);
    this.postService.addPost(newPost);
  }
}
