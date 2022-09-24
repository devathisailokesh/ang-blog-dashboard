import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink: string = '';
  imgSrc: any = './assests/placeholder-image.jpg';
  selectedImg: any;

  constructor() { }

  ngOnInit(): void {
  }

  onTitleChanged($event:any) {
    
    const title = $event.target.value
    this.permalink = title.replace(/\s/g, '-');
    
  }
  showPreview ($event:any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result 
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0];

  }

}
