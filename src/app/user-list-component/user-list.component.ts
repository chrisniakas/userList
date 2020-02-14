import { Component, OnInit } from '@angular/core';
import {USERS } from '../../user_data.js';
import {UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserModel = USERS 
  rowClicked: boolean = false
  form: FormGroup
  save: boolean 
  cancel: boolean 
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onRowClick(i){
   this.form = this.userService.createForm(this.users[i]);
    this.rowClicked = true;

  }
  onSave(){
  this.save = true
  }
  onClose(){
    this.cancel = true
    console.log(this.cancel, this.save);
    
  }
}
