import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StringAndArrayOneComponent } from './string-and-array-one/string-and-array-one.component';
import { BeforeEachAfterEachComponent } from './before-each-after-each/before-each-after-each.component';
import { ServiceTestingOneComponent } from './service-testing-one/service-testing-one.component';
import { ServiceTestingTwoComponent } from './service-testing-two/service-testing-two.component';
import { DomEventsComponent } from './dom-events/dom-events.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StringAndArrayOneComponent,
    BeforeEachAfterEachComponent,
    ServiceTestingOneComponent,
    ServiceTestingTwoComponent,
    DomEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
