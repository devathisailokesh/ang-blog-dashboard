import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Category } from '../models/category'

import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
onEdit1(arg0: any) {
throw new Error('Method not implemented.');
}

  categoryArray: Array<any> | undefined
Category: any;
formCategory: string | undefined;
formStatus: string = 'Add'
categoryId: string | undefined;


  
  
  constructor( private categoryService: CategoriesService ) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe( val => {
      console.log(val);  
      this.categoryArray = val;
    })
  }

  onSubmit(formData: any){
    let categoryData:Category = {
      category: formData['value'].category,
      
    }

    if( this.formStatus == 'Add' ){
      this.categoryService.saveData(categoryData);
      formData.reset();
     }
     else if( this.formStatus == 'Edit'){
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus = 'Add';
     }

    
    //let subCategoryData = {
      //subCategory: 'subCategory1'
    
    //this.afs.collection('categories').add(categoryData).then(docRef => {
      //console.log(docRef);
        
        //this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData)

         //this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
         //console.log(docRef1);

           //this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData)
           
           
           
           //this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2  => {
            //console.log('Second Level Subcategory Saved Successfully');
           //})
         //})
   // })
      
   //.catch(err  =>console.log(err);
  }
   onEdit(category: string | undefined , id: any){
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryId = id;
   }

   
      
    
        

  }



