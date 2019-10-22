import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dfdfdfdf;
  xyz;
  constructor(private http: HttpClient) { }
 

  ngOnInit() {
this.gets();
this.mahesh();
      // return this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      //   travellers => {
      //     this.travellers=travellers;
         
      // });
      }
      gets() {
        this.http.get("http://localhost:3000/posts").subscribe(res=>this.dfdfdfdf=res);
        console.log( "sasas",this.dfdfdfdf);
  }
  mahesh(){
    this.http.get("http://192.168.3.235:8080/home").subscribe(res=>this.xyz=res);
    console.log("masbh",this.xyz);
  }
  }
  
