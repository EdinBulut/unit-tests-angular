import { AuthenticationService } from './../services/authentication.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTestingTwoComponent } from './service-testing-two.component';

describe('ServiceTestingTwoComponent', () => {
  let component: ServiceTestingTwoComponent;
  let fixture: ComponentFixture<ServiceTestingTwoComponent>;
  let authService: AuthenticationService;
  let h2: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTestingTwoComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestingTwoComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('h2 value checked', () => {
    component.isAuthenticated();
    fixture.detectChanges()
    expect(h2?.textContent).toBe(component.isAuthenticatedString)
  })
});
