import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './service/course.service.client.service';
import {ModuleServiceClient} from './service/module.service.client.service';
import {LessonServiceClient} from './service/lesson.service.client.service';
import {TopicServiceClient} from './service/topic.service.client.service';
import {WidgetServiceClient} from './service/widget.service.client.service';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './service/user.service.client';
import {routing} from './app.routing';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseEditorComponent,
    LoginComponent,
    RegisterComponent,
    CourseGridComponent,
    WidgetListComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
