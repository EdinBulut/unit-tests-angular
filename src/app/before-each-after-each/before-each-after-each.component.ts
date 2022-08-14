import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-each-after-each',
  templateUrl: './before-each-after-each.component.html',
  styleUrls: ['./before-each-after-each.component.scss']
})
export class BeforeEachAfterEachComponent implements OnInit {

  hotelRoomCapacity = 30
  cusomerCount = 10

  constructor() { }

  ngOnInit(): void {
  }

  increaseCount () {
    return ++this.cusomerCount
  }

  decreaseCount() {
    return --this.cusomerCount
  }

  reserveRoom() {
    let roomReserved = false 
    if (this.cusomerCount < this.hotelRoomCapacity) {
      this.cusomerCount++
      roomReserved = true 
    }
    return roomReserved
  }

}
