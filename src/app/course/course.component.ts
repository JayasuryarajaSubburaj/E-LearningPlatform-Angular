import { Component } from '@angular/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']  // Use styleUrls instead of styleUrl
})
export class CourseComponent {
  languages = ['C', 'Java', 'HTML', 'JavaScript'];

  constructor(private languageService: LanguageService) {}

  onLanguageClick(language: string) {
    this.languageService.selectedLanguage = language;
  }
}


