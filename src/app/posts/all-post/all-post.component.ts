import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  constructor(private postservice: PostsService) { }

  ngOnInit(): void {

    this.postservice.loadData().subscribe(val => {
      console.log(val);
    })
  }

}
