import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course-service-client.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  constructor(private service: CourseServiceClient,
              private activatedRoute: ActivatedRoute) { }

  setLessonDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      this.topicId = params['topicId'];

      if (this.lessonId !== undefined) {
        this.service.findAllTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

  ngOnInit() {
    this.setLessonDetails();
  }

}
