import {Injectable} from '@angular/core';
const COURSE_API_URL = 'https://java-jpa-server.herokuapp.com/api/user/userId/course/';
const uri = 'https://java-jpa-server.herokuapp.com/api/user/';

@Injectable()
export class CourseServiceClient {
  findCourseById(userId, courseId) {
    return fetch(COURSE_API_URL.replace('userId', userId) + courseId)
      .then(response => response.json());
  }

  findAllCourses(userId) {
    return fetch(COURSE_API_URL.replace('userId', userId))
      .then(response => response.json());
  }

  createCourse(userId, course) {
    return fetch(uri + userId + '/course', {
      body: JSON.stringify(course),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => response.json());
  }
  updateCourse(userId, courseId, course) {
    return fetch(uri + userId + '/course/' + courseId, {
      body: JSON.stringify(course),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => response.json());
  }
  // deletes course instance whose id matches the id parameter
  deleteCourse(userId, courseId) {
    return fetch(uri + userId + '/course/' + courseId, {
      method: 'DELETE',
    }).then(response => response.json());
  }
}
