import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-service-testing-two',
  templateUrl: './service-testing-two.component.html',
  styleUrls: ['./service-testing-two.component.scss']
})
export class ServiceTestingTwoComponent implements OnInit {

  isAuthenticatedString!: string;
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.authenticate();
  }

  isAuthenticated() {
    if (this.authService.checkAuthentication()) {
      this.isAuthenticatedString = 'Authenticated'
    }
    else this.isAuthenticatedString =  "Not authenticated";
  }

}
