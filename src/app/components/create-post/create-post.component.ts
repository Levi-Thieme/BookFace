import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  @Output() submitEmitter = new EventEmitter();
  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    contents: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.submitEmitter.emit(this.profileForm.value);
  }
}
