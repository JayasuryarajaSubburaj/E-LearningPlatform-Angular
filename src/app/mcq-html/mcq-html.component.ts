import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq-html',
  templateUrl: './mcq-html.component.html',
  styleUrl: './mcq-html.component.css'
})
export class McqHtmlComponent {
  mcqQuestions: any[] = [
    {
      question: '1.What does HTML stand for?',
      options: [
        'Hyper Transfer Markup Language',
        'Hyper Text Markup Language',
        'High-level Text Markup Language',
        'Hyperlinks and Text Markup Language'
      ],
      correctAnswer: 'Hyper Text Markup Language'
    },

    {
      question: '2.How many sizes of headers are available in HTML by default?',
      options: [
        '5',
        '1',
        '3',
        '6'
      ],
      correctAnswer: '6'
    },

    {
      question: '3.What is the smallest header in HTML by default?',
      options: [
        'h1',
        'h2',
        'h6',
        'h4'
      ],
      correctAnswer: 'h6'
    },

    {
      question: '4.Which of the following tag is used to insert a line-break in HTML?',
      options: [
        '<br>',
        '<a>',
        '<pre>',
        '<b>'
      ],
      correctAnswer: '<br>'
    },
    
    {
      question: '5.<input> is -',
      options: [
        'a format tag.',
        'an empty tag.',
        'All of the above',
        'None of the above'
      ],
      correctAnswer: 'an empty tag.'
    },
  ];
}
