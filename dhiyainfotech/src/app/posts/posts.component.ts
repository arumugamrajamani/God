import { Component, OnInit } from '@angular/core';
import { Posts_data } from 'src/app/types';
import { postListings } from '../fake-data';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: Posts_data[] = [];
  constructor() { }

  ngOnInit(): void {
    this.posts = postListings;
  }

}
