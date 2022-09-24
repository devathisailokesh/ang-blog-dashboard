import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink: string = '';
  imgSrc: any = './assests/placeholder-image.jpg';
  selectedImg: any;

  categories: Array<any> | undefined;

  postForm: FormGroup

  constructor( private categoryService: CategoriesService, private fb: FormBuilder ) {

    this.postForm = this.fb.group({
      title: [''],
      permalink: [''],
      expect: [''],
      postImg: [''],
      content: ['']

    })

   }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val => {
      this.categories = val;

    })
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
