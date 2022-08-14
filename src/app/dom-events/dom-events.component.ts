import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl: './dom-events.component.html',
  styleUrls: ['./dom-events.component.scss']
})
export class DomEventsComponent implements OnInit {
  countClicks = 0


  constructor() { }


  ngOnInit(): void {
  }


  addClicks() {
    this.countClicks++;
  }
  
  
  removeClicks() {
    this.countClicks--;
  }


}
