import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  postArray: Array<any> | undefined;

  constructor(private postservice: PostsService) { }

  ngOnInit(): void {

    this.postservice.loadData().subscribe(val => {
      console.log(val);
      this.postArray = val;

    });
  }

  onDelete(postImgPath: any, id: any){
    this.postservice.deleteImage(postImgPath, id);
  }

  onFeatured(id: any, value: any){

    const featuredData = {
      isFeatured: value
    }

    this.postservice.markFeatured(id, featuredData);

  }


}


