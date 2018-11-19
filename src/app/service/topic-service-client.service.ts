import {Injectable} from '@angular/core';

const tUri = 'http://localhost:8080/api/lesson/lid/topic';
const tUri2 = 'http://localhost:8080/api/topic/tid';

@Injectable()
export class TopicServiceClient {

  findTopicsForLesson = (lessonId) => {
    return fetch(tUri.replace('lid', lessonId),
      {credentials: 'include'})
      .then(response => response.json());
  }

  findAllTopics() {
    return fetch('http://localhost:8080/api/topic',
      {credentials: 'include'})
      .then(response => response.json());
  }

  createTopics(lid, topic) {
    return fetch(tUri.replace('lid', lid), {
      credentials: 'include',
      body: JSON.stringify(topic),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST'
    }).then(response => response.json());
  }

  findTopicById(tid) {
    return fetch(tUri2.replace('tid', tid), {
      credentials: 'include',
    }).then(response => response.json());
  }

  updateTopic(tid, topic) {
    return fetch(tUri2.replace('tid', tid), {
      credentials: 'include',
      body: JSON.stringify(topic),
      headers: {'Content-Type' : 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }

  deleteTopic(tid) {
    return fetch(tUri2.replace('tid', tid), {
      credentials: 'include',
      method: 'DELETE'
    }).then(response => response.json());
  }
}
