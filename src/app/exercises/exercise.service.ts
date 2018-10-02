import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  bodys: String[] = ['pectoraux', 'dos'];

  exercises: Array<Exercise[]> = [
    [
    {name: 'dips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'développé couché',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'développé incliné',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'développé décliné',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0}
    ],
    [
    {name: 'écartés avec haltères',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'butterfly', description: 'butterfly desc',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'écartés aux poulies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0},
    {name: 'pompes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0}
    ]
  ];

  constructor() { }

  getAllExercises() {
    return this.exercises;
  }

  getExerciseById() {
  }

  getAllBodys() {
    return this.bodys;
  }

  getBodyById() {
  }
}
