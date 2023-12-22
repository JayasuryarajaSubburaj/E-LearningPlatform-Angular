import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq-javascript',
  templateUrl: './mcq-javascript.component.html',
  styleUrl: './mcq-javascript.component.css'
})
export class McqJavascriptComponent {
  mcqQuestions: any[] = [
    {
      question: '1.What is the correct way to include JavaScript in an HTML file?',
      options: [
        '<script src="script.js"></script>',
        '<javascript src="script.js"></javascript>',
        '<js src="script.js"></js>',
        '<include src="script.js"></include>'
      ],
      correctAnswer: '<script src="script.js"></script>'
    },
    
    {
      question: '2.Which one of the following also known as Conditional Expression:',
      options: [
        'Alternative to if-else',
        'Switch statement',
        'If-then-else statement',
        'immediate if'
      ],
      correctAnswer: 'immediate'
    },

    {
      question: '3.In JavaScript, what is a block of statement?',
      options: [
        'Conditional block',
        'block that combines a number of statements into a single compound statementt',
        'both conditional block and a single statement',
        'block that contains a single statement'
      ],
      correctAnswer: 'block that combines a number of statements into a single compound statementt'
    },

    {
      question: '4. The "function" and " var" are known as',
      options: [
        'Keywords',
        'Data types',
        'Declaration statements',
        'Prototypes'
      ],
      correctAnswer: 'Declaration statements'
    },

    {
      question: '5.Which one of the following is the correct way for calling the JavaScript code?',
      options: [
        'Preprocessor',
        'Triggering Event',
        'RMI',
        'Function/Method'
      ],
      correctAnswer: 'Function/Method'
    },
  ];
}