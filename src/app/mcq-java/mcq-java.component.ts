import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq-java',
  templateUrl: './mcq-java.component.html',
  styleUrls: ['./mcq-java.component.css']
})
export class McqJavaComponent {
  mcqQuestions: any[] = [
    {
      question: '1.What is Java Virtual Machine (JVM)?',
      options: [
        'A hardware processor that runs Java bytecode',
        'A software interpreter that executes Java bytecode',
        'A programming language developed by Sun Microsystems',
        'An operating system for Java applications'
      ],
      correctAnswer: 'A software interpreter that executes Java bytecode'
    },
    
    {
      question: '2. What part is used to compile, debug and execute java programs?',
      options: [
        'JRE',
        'JIT',
        'JDK',
        'JVM'
      ],
      correctAnswer: 'JDK'
    },

    {
      question: '3.What difference does it make when java is out of memory?',
      options: [
        'MemoryError',
        'OutOfMemoryError',
        'MemoryOutOfBoundsException',
        'MemoryFullException'
      ],
      correctAnswer: 'OutOfMemoryError'
    },

    {
      question: '4. Which of these selection statements in Java do you have?',
      options: [
        'a break',
        'continue',
        'for ()',
        'if ()'
      ],
      correctAnswer: 'OutOfMemoryError'
    },

    {
      question: '5.Which of these keywords is used to block an exception?',
      options: [
        'check',
        'throw',
        'catch',
        ' try'
      ],
      correctAnswer: ' try'
    },
  ];
}
