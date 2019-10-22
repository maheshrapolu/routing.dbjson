import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css']
})
export class SapComponent implements OnInit {

  constructor() { }
  @Input() childMessag: string;
  ngOnInit() {
  }

}
