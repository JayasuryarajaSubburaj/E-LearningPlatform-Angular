import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LanguageService } from './language.service';
import { McqQuestionsComponent } from './mcq-questions/mcq-questions.component';
import { McqCComponent } from './mcq-c/mcq-c.component';
import { McqCppComponent } from './mcq-cpp/mcq-cpp.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AboutDetailsComponent } from './about-details/about-details.component';
import { McqJavaComponent } from './mcq-java/mcq-java.component';
import { McqHtmlComponent } from './mcq-html/mcq-html.component';
import { McqJavascriptComponent } from './mcq-javascript/mcq-javascript.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ContactComponent,
    AboutComponent,
    McqQuestionsComponent,
    McqCComponent,
    McqCppComponent,
    ContactDetailsComponent,
    AboutDetailsComponent,
    McqJavaComponent,
    McqHtmlComponent,
    McqJavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
