import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './service/course-service-client.service';
import {ModuleServiceClient} from './service/module-service-client.service';
import {LessonServiceClient} from './service/lesson-service-client.service';
import {TopicServiceClient} from './service/topic-service-client.service';
import {WidgetServiceClient} from './service/widget-service-client.service';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './service/user.service.client';
import {routing} from './app.routing';
import { WhiteBoardComponent } from './Whiteboard/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './service/section.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSectionListComponent } from './admin-section-list/admin-section-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabComponent } from './lesson-tab/lesson-tab.component';
import { TopicPillComponent } from './topic-pill/topic-pill.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    SectionListComponent,
    WidgetListComponent,
    AdminComponent,
    AdminSectionListComponent,
    ModuleListComponent,
    LessonTabComponent,
    TopicPillComponent,
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
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
