import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formGroup: FormGroup;
  name : string;
  phone: string;
  email: string;
  address: string;
  company: string
  id: number
  photo: string

  constructor() { }

  createForm(user?:UserModel){     
    

    this.id =  user && user.id 
    this.photo =  user && user.photo 
    this.name =  user && user.name ? user.name : '';
    this.phone = user && user.phone  ?user.phone : '';
    this.email =   user && user.email  ? user.email : '';     
    this.address =   user && user.address  ? user.address : ''; 
    this.company =   user && user.company  ? user.company : ''; 
  

      return this.formGroup= new FormGroup({
        name: new FormControl (this.name),
        phone: new FormControl (this.phone),
        email: new FormControl ( this.email),
        address: new FormControl ( this.address),
        company: new FormControl ( this.company),       
        id : new FormControl ( this.id),       
        photo : new FormControl ( this.photo)       
      })    
    } 
 
}   


