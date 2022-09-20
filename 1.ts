import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private afs: AngularFirestore ) { }

  ngOnInit(): void {
  }

  onSubmit(formData){
    console.log(formData);
  }
}