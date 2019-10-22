import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeone',
  templateUrl: './homeone.component.html',
  styleUrls: ['./homeone.component.css']
})
export class HomeoneComponent implements OnInit {
  fdata;
  rout:any;
  emplye: any;
  order:any;
  name:any;
  constructor(private st: DataService, private fb:FormBuilder,private router:Router) { }

  form =this.fb.group({
    id: [],
    Firstname: [],
    lastname: []
      })
    
    ngOnInit() {
    this.getData();
      }
    getData() {
      this.st.ge().subscribe(res=>this.fdata=res);
      // console.log('hsahdg',this.fdata.lastname);
    }
    su() {
      this.st.po(this.form.value).subscribe(res=>this.getData());
      this.form.reset();
      // this.router.navigate(['/details/'])
    }
    del(d){
      this.st.de(d.id).subscribe(res=>this.getData());
    }
    ed(d){
      this.form.patchValue({
        id: d.id,
        Firstname: d.Firstname,
        lastname: d.lastname
      })
    }
    up(){
      this.st.pu(this.form.value).subscribe(res=>this.getData());
      this.form.reset();
    }
    btn(d){
  
      this.emplye=d;
        console.log(d)
     }
     gotopage(){
       this.router.navigate(['/details']);
       
     }
    
    
  }