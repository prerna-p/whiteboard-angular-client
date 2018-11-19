import {Injectable} from '@angular/core';
const wUri =  'https://java-jpa-server.herokuapp.com/api/topic/tid/widget'; // create and get
const wUri2 = 'https://java-jpa-server.herokuapp.com/api/widget/wid';

@Injectable()
export class WidgetServiceClient {

  findAllWidgetsForTopic = (tid) => {
    return fetch(wUri.replace('tid', tid))
      .then(response => response.json());
  }

  findAllWidgets = () => {
    return fetch('/api/widget')
      .then(response => response.json());
  }

  createWidget = (tid, widget) => {
    return fetch(wUri.replace('tid', tid), {
      body: JSON.stringify(widget),
      headers: {'Content-Type' : 'application/json'},
      method: 'POST'
    }).then(response => response.json());
  }

  findWidgetById = (wid) => {
    return fetch(wUri2.replace('wid', wid)).then(response => response.json());
  }

  updateWidget = (wid, widget) => {
    return fetch(wUri2.replace('wid', wid), {
      body: JSON.stringify(widget),
      headers: {'Content-Type' : 'application/json'},
      method: 'PUT'
    }).then(response => response.json());
  }

  deleteWidget = (wid) => {
    return fetch(wUri2.replace('wid', wid), {
      method: 'DELETE'
    }).then(response => response.json());
  }

}
