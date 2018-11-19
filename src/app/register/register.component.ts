import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../service/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if (password === password2) {
      this.service.createUser(username, password)
        .then((response) => {
          if (response.status === 404) {
            alert('username taken');
          } else {
            this.router.navigate(['/profile']);
          }
        });
    } else {
      alert('Passwords do not match');
      this.resetFields();
    }
  }

  resetFields = () => {
    this.username = '';
    this.password = '';
    this.password2 = '';
  }

  ngOnInit() {
  }

}
