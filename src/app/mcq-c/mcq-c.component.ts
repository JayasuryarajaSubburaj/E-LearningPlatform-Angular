import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq-c',
  templateUrl: './mcq-c.component.html',
  styleUrl: './mcq-c.component.css'
})
export class McqCComponent {

  constructor() {
    console.log('McqCComponent created');
  }
  mcqQuestions: any[] = [
    {
      question: '1.What is the syntax for declaring a variable in C?',
      options: ['int x;', 'variable x;', 'declare x;', 'x = 5;'],
      correctAnswer: 'int x;'
    },

    {
      question: '2.We cannot use the keyword ‘break’ simply within',
      options: ['while;', 'for;', ' if-else;', 'do-while;'],
      correctAnswer: 'int x;'
    },

    {
      question: '3.The global variables are',
      options: ['External;', 'Internal;', 'Both External and Internal;', ' None of the above;'],
      correctAnswer: 'int x;'
    },

    {
      question: '4.Out of the following operations, which one is not possible in the case of a register variable?',
      options: ['Global declaration of the register variable;', 'ICopying the value from the memory variable;', 'Reading any value into the register variable;', ' All of the above;'],
      correctAnswer: 'int x;'
    },

    {
      question: '5.The correct format of declaring a function is:',
      options: ['type_of_return name_of_function (argument type);', ' type_of_return name_of_function (argument type){};', 'type_of_return (argument type) name_of_function;', ' All of the above;'],
      correctAnswer: 'int x;'
    },
  ];
}
