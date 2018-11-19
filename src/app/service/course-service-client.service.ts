import {Injectable} from '@angular/core';
const COURSE_API_URL = 'http://localhost:8080/api/course/';
const uri = 'http://localhost:8080/api/user/';

@Injectable()
export class CourseServiceClient {
  findCourseById(courseId) {
    return fetch(COURSE_API_URL + courseId)
      .then(response => response.json());
  }

  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(COURSE_API_URL + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(moduleId) {
    return fetch(COURSE_API_URL + '1/module/' + 1 + '/lesson')
      .then(response => response.json());
  }

  findAllTopicsForLesson(lessonId) {
    return fetch(COURSE_API_URL + '1/module/1/lesson/' + 1 + '/topic')
      .then(response => response.json());
  }

  findAllWidgetsForTopic(topicId) {
    return fetch('http://localhost:8080/api/topic/' + 1 + '/widget')
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
