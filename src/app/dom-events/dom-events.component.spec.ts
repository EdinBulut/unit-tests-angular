import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DomEventsComponent } from './dom-events.component';

fdescribe('DomEventsComponent', () => {
  let component: DomEventsComponent;
  let fixture: ComponentFixture<DomEventsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomEventsComponent ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(DomEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('"Add Clicks" btn is clicked', () => {
    const h1 = debugElement.query(By.css('h1'));
    const addBtn = debugElement.query(By.css('#addBtn'));
    addBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toBe(parseInt(h1.nativeElement.innerText, 10));
  });



});
