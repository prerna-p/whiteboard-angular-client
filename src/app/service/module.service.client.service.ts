import {Injectable} from '@angular/core';

const mUri = 'https://java-jpa-server.herokuapp.com/api/course/cid/module';
const mUri2 = 'https://java-jpa-server.herokuapp.com/api/course/1/module/1';


@Injectable()
export class ModuleServiceClient {

  findAllModules() {
    return fetch('http://localhost:8080/api/module')
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(mUri.replace('cid', courseId))
      .then(response => response.json());
  }

  findModuleById(moduleId) {
    return fetch(mUri + '/' + moduleId, )
      .then(response => response.json());
  }
// const mUri2 = 'http://localhost:8080/api/course/cid/module/mid'
  createModule(courseId, module) {
    return fetch(mUri.replace('cid', courseId), {
      body: JSON.stringify(module),
      headers: {'Content-Type' : 'application/json'},
      credentials: 'include',
      method: 'POST'
    }).then(response => response.json());
  }

  updateModule(courseId, moduleId, module) {
    console.log(moduleId);
    return fetch(mUri2.replace('cid', courseId).replace('mid', moduleId), {
      credentials: 'include',
      body: JSON.stringify(module),
      headers: {'Content-Type' : 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }

  deleteModule(courseId, moduleId) {
    return fetch(mUri2.replace('cid', courseId).replace('mid', moduleId), {
      credentials: 'include',
      method: 'DELETE',
    }).then(response => response.json());
  }
}
