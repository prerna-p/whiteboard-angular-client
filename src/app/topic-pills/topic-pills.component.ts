import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course.service.client.service';
import {ActivatedRoute, Params} from '@angular/router';
import {TopicServiceClient} from '../service/topic.service.client.service';

@Component({
  selector: 'app-topic-pill',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  userId;
  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  constructor(private topicService: TopicServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.setLessonDetails();
  }

  setLessonDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      this.topicId = params['topicId'];

      if (this.lessonId !== undefined) {
        this.topicService.findTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

  ngOnInit() {
  }

}
