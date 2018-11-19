import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CourseServiceClient} from '../service/course-service-client.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  courseId;
  topicId;
  widgets = [];

  constructor(private activatedRoute: ActivatedRoute,
              private service: CourseServiceClient) { }

  setTopicDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.topicId = params['topicId'];
      if (this.topicId !== undefined) {
        this.service.findAllWidgetsForTopic(this.topicId)
          .then(widgets => this.widgets = widgets);
      }
    });
  }

  ngOnInit() {
    this.setTopicDetails();
  }

}
