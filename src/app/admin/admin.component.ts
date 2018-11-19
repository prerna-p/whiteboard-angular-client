import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../service/course-service-client.service';
import {SectionServiceClient} from '../service/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courses = [];
  sections = [];
  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  findSectionsForCourse(courseId) {
    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
