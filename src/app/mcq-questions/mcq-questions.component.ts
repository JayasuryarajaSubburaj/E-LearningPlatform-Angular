import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-mcq-questions',
  templateUrl: './mcq-questions.component.html',
  styleUrl: './mcq-questions.component.css'
})
export class McqQuestionsComponent {
  selectedLanguage: string;

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = languageService.selectedLanguage;
  }

}
