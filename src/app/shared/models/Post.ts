import { Comment } from './comment';

export class Post {
    username: string;
    createdOn: string;
    content: string;
    comments: Comment[];

    constructor(username: string, createdOn: string, content: string, comments: Comment[]) {
        this.username = username;
        this.createdOn = createdOn;
        this.content = content;
        this.comments = comments;
    }
}   