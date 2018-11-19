import {Injectable} from '@angular/core';
const COURSE_API_URL = 'http://localhost:8080';
// const COURSE_API_URL = 'http://localhost:3000';
@Injectable()
export class LessonServiceClient {


  findAllLessonsForModule(moduleId) {
    return fetch(COURSE_API_URL + '/api/course/1/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
  
}
