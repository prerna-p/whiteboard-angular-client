import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course-service-client.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-lesson-tab',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  moduleId;
  courseId;
  lessonId;
  lessons = [];
  constructor(private service: CourseServiceClient,
              private activatedRoute: ActivatedRoute) {}

  setModuleDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.lessonId = params['lessonId'];
      if (this.moduleId !== undefined) {
        this.service.findAllLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

  ngOnInit() {
    this.setModuleDetails();
  }

}
