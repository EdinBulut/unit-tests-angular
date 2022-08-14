import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-and-array-one',
  templateUrl: './string-and-array-one.component.html',
  styleUrls: ['./string-and-array-one.component.scss']
})
export class StringAndArrayOneComponent implements OnInit {

  name = '6th Brko from underground'
  obj1 = {
    a: '1'
  }
  
  obj2 = {
    a: '1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
