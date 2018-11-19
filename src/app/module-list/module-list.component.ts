import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CourseServiceClient} from '../service/course-service-client.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId;
  course = {courseId: ''};

  constructor(private activatedRoute: ActivatedRoute,
              private service: CourseServiceClient) {
    this.setCourseDetails();
  }

  setCourseDetails() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.course.courseId = params['courseId'];
      this.moduleId = params['moduleId'];
      this.service.findAllModulesForCourse(this.course.courseId)
        .then(modules => this.modules = modules);
    });
  }

  ngOnInit() {
  }
}
