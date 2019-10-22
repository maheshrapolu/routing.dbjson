import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  value;
  sasa;
  constructor( private http:HttpClient,private fb:FormBuilder) { }
  form =this.fb.group({
    id: [],
    Firstname: [],
    lastname: []
      })

  ngOnInit() {
    // this.get(); 
    this.mas();
  }
  
// get(){
//   this.http.get("http://localhost:3000/posts")
//   .subscribe((res) => {
//    console.log(res, 'jsfd');
//    this.value = res;
//   })
// }
mas(){
  this.http.get("http://localhost:3000/posts")
 .subscribe((res)=>{
   console.log(res);
   this.value=res;
 })
}
past(sa){
  this.http.post("http://localhost:3000/posts",sa).subscribe(res=>this.mas());
  this.form.reset();
}
}
