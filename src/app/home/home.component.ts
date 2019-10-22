import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {  FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id={name:'Rapolu Mahesh',
  MobileNo: '9000141578'}
  list=new FormGroup({
    username: new FormControl('',[Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
  });
  get username(){
    return this.list.get('username')
  }
  get password(){
    return this.list.get('password')
  }

  constructor(private router:Router,private route: ActivatedRoute) { }
  // openDetails() {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(this.id)
  //     }
  //   };
  //   this.router.navigate(['/dashboard'], navigationExtras);
  // }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.id = params['id'];
    // })
  }
  godash(){
    this.router.navigate(['/dashboard']);
  }
  
  
}


