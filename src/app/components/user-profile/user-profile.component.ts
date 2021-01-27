import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  public user = {
    firstName: '',
    lastName: '',
    email: ''
  };

  public userForm: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }
}
