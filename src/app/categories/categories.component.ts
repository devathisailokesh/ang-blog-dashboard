import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  

  constructor( private afs: AngularFirestore ) { }

  ngOnInit(): void {
  }

  onSubmit(formData:any){
    let categoryData = {
      category: formData.value.category,
    }
    let subCategoryData = {
      subCategory: 'subCategory1'
    }
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
        
        this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData)

         this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
         console.log(docRef1);

           // this.afs.doc(`categories/${docRef.id}/subcategories/${docRef1.id}`).collection('subsubcategories').add(subCategoryData)
           
           
           
           this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData).then(docRef2  => {
            console.log('Second Level Subcategory Saved Successfully');
           })
         })
    })
      
   console.log(categoryData);
      
    
        

  }
}


