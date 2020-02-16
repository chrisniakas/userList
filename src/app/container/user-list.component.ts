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
 
  selectedUser: number
  currentUser
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onRowClick(i:number, user:UserModel){
   if(this.form && this.form.value){ 
     this.form.reset();
    } 
    
   this.form = this.userService.createForm(this.users[i]);
   this.selectedUser = i
   this.currentUser = user.name
   console.log(this.currentUser);
   
   this.rowClicked = true;

  }
  onSave(update: UserModel){    
    this.users[this.selectedUser] = update;
  }
 onCancel(){    
   this.form.patchValue(this.users[this.selectedUser])
 
 }
}
