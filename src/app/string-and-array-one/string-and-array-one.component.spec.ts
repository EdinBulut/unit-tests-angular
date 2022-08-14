import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringAndArrayOneComponent } from './string-and-array-one.component';

// xdescribe - exclude component from testing

describe('StringAndArrayOneComponent', () => {
  let component: StringAndArrayOneComponent;
  let fixture: ComponentFixture<StringAndArrayOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringAndArrayOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringAndArrayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // xit - exclude code from testing
  xit ('name - toBeTrue! ', () => {
    const name = component.name === '6th Brko from underground'
    expect(name).toBeTrue()
  })

  it ('name - toBe! ', () => {
    expect(component.name).toBe('6th Brko from underground')
  })

  it ('name - toContain! ', () => {
    expect(component.name).toContain('ko')
    
  })

  it ('array - toContain! ', () => {
    const array = ['abc', 'def', 'ghi']
    expect(array).toContain('ghi')
    
  })
  
  it ('name - toMatch! ', () => {
    expect(component.name).toMatch(/\d+/) // this regex checks is there any number in name
    expect(component.name).toMatch('underground')
  })

  // to check for deep equality (objects, arrays..) use .toEqual() instead of .toBe()
  it ('objects - toEqual! ', () => {
    expect(component.obj1).toEqual(component.obj2)
  })

  it ('arrays - toEqual! ', () => {
    const array = [1, 2, 3]
    expect(array).toEqual([1, 2, 3])
  })

  it ('name - not.toEqual! ', () => {
    expect(component.name).not.toEqual('sarma') // 
  })



});
