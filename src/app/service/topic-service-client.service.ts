import {Injectable} from '@angular/core';
const COURSE_API_URL = 'http://localhost:8080';
// const COURSE_API_URL = 'http://localhost:3000';
@Injectable()
export class TopicServiceClient {

  findAllTopicsForLesson(lessonId) {
    return fetch(COURSE_API_URL + '/api/course/1/module/1/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllWidgetsForTopic(topicId) {
    return fetch(COURSE_API_URL + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
