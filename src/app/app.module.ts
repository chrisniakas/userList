import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UserService } from 'src/app/services/user.service';
import { UserListComponent } from './container/user-list.component';
import {  UserInfoComponent } from './component/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInfoComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
