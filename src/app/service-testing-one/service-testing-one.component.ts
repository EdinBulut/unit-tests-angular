import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-testing-one',
  templateUrl: './service-testing-one.component.html',
  styleUrls: ['./service-testing-one.component.scss']
})
export class ServiceTestingOneComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.authenticate();
  }

  isAuthenticated() {
    if (this.authService.checkAuthentication()) {
      return 'Authenticated'
    }
    return "Not authenticated"
  }

}
