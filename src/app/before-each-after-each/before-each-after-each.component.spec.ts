import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeEachAfterEachComponent } from './before-each-after-each.component';

describe('BeforeEachAfterEachComponent', () => {
  let component: BeforeEachAfterEachComponent;
  let fixture: ComponentFixture<BeforeEachAfterEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeEachAfterEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeEachAfterEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // afterEach(() => {
  //   fixture = TestBed.createComponent(BeforeEachAfterEachComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increaseCount checked', () => {
    const count  = component.increaseCount();
    expect(count).toBe(11);
  })

  it('decreaseCount checked', () => {
    const count  = component.decreaseCount();
    expect(count).toBe(9);
  })

  it('testing room is reserved or not', () => {

    // Arrange 
    let custReserved = new BeforeEachAfterEachComponent()

    // Act 
    let isReserved = custReserved.reserveRoom()

    // Assert
    expect(isReserved).toBeTruthy()
  })

});
