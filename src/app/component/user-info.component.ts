import { Component,  Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnChanges {
  @Input()
  form: FormGroup 

  @Output()
  editUser:EventEmitter<UserModel> = new EventEmitter();

  @Output()
  resetUser:EventEmitter<any> = new EventEmitter();

  save: boolean ;
  cancel: boolean ;

  constructor() { }

  ngOnChanges() {
    this.save = false;
    this.cancel = false;
  }

  onSave(){
    this.save = true;
    this.editUser.emit(this.form.value)
    }

  onClose(){
    console.log(this.form.pristine);
      this.cancel = true
      this.resetUser.emit()     
    }

    get showCancelButton(){    
      return !this.form.pristine && (!this.save && !this.cancel)
    }
    get disableSaveButton(){
      return this.form.pristine || (this.save || this.cancel)
    }
}
