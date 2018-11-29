import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LessonServiceClient} from '../service/lesson.service.client.service';

@Component({
  selector: 'app-lesson-tab',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  userId;
  moduleId;
  courseId;
  lessonId;
  lessons = [];
  constructor(private lessonService: LessonServiceClient,
              private activatedRoute: ActivatedRoute) {}

  setModuleDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      if (this.moduleId !== undefined) {
        this.lessonService.findAllLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

  ngOnInit() {
    this.setModuleDetails();
  }

}
