import { AuthenticationService } from './../services/authentication.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTestingOneComponent } from './service-testing-one.component';

describe('ServiceTestingOneComponent', () => {
  let component: ServiceTestingOneComponent;
  let fixture: ComponentFixture<ServiceTestingOneComponent>;
  let authService: AuthenticationService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTestingOneComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestingOneComponent);
    authService = TestBed.inject(AuthenticationService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  xit('should be authenticated - without spyOn', () => {
    let authentication = component.isAuthenticated()
    expect(authentication).toBe('Authenticated')
  })
  
  xit('should be authenticated - with spyOn', () => {
    spyOn(authService, 'checkAuthentication')
    let authentication = component.isAuthenticated()
    expect(authService.checkAuthentication).toHaveBeenCalled()
  })
  
  it('should be authenticated - with spyOn + .and', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true)
    let authentication = component.isAuthenticated()
    expect(authentication).toBe('Authenticated')
    expect(authService.checkAuthentication).toHaveBeenCalled()
  })


});
