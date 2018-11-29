import {Injectable} from '@angular/core';
const USER_API_URL = 'http://localhost:8080';
@Injectable()
export class UserServiceClient {

  findUserById(userId) {
      return fetch(USER_API_URL + '/api/user/' + userId)
        .then(response => response.json());
  }

  login(username, password) {
    return fetch(USER_API_URL + '/api/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        'username': username,
        'password': password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(USER_API_URL + '/api/logout',
      {
      method: 'post',
        credentials: 'include'
    });
  }

  profile() {
    return fetch(USER_API_URL + '/api/profile',
      {
      credentials: 'include'
    }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(USER_API_URL + '/api/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    return fetch(USER_API_URL + '/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
