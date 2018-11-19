import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CourseServiceClient} from '../service/course.service.client.service';
import {WidgetServiceClient} from '../service/widget.service.client.service';

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
              private widgetService: WidgetServiceClient) { }

  setTopicDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.topicId = params['topicId'];
      if (this.topicId !== undefined) {
        this.widgetService.findAllWidgetsForTopic(this.topicId)
          .then(widgets => this.widgets = widgets);
      }
    });
  }

  ngOnInit() {
    this.setTopicDetails();
  }

}
