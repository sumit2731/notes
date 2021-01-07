import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

interface Question {
  type: string;
  question: string;
  options: string[];
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  title = 'app';

  surveyForm: FormGroup;

  questions: Question[] = [
    {
      type: 'mc',
      question: 'Which of the following do you like most?',
      options: ['apple', 'orange', 'peach', 'banana'],
    },
    {
      type: 'mc',
      question: 'What color do you like?',
      options: ['red', 'orange', 'blue'],
    },
    {
      type: 'mc',
      question: 'What is your age range?',
      options: ['pre-teen', 'teen', 'post-teen'],
    },
  ];

  ngOnInit() {
    this.surveyForm = new FormGroup({
      'dynamic': new FormArray([])
    });

    let control: FormControl;
    this.questions.forEach(item => {
      control = new FormControl(null, Validators.required);
      (<FormArray>this.surveyForm.get('dynamic')).push(control);
    });
  }

  onSubmit() {
    console.log(this.surveyForm.value);
    // this.questions.forEach(question => {
    for (let i = 0; i < this.questions.length; ++i) {
      const question = this.questions[i].question;
      const answer = this.surveyForm.value.dynamic[i];
      console.log('For question: ' + question + ', you answered: ' + answer);
    }
  }

}
