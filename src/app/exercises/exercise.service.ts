import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  bodys: String[] = [
    'pectoraux',
     'dos'
  ];

  exercises: Array<Exercise[]> = [
    [
    {name: 'dips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'développé couché',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'développé incliné',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'développé décliné',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/dips.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'patate',
    description: 'tomate',
      imagePath: 'assets/images/exercises/this-is-sparta.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: true}
    ],
    [
    {name: 'écartés avec haltères',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'butterfly', description: 'butterfly desc',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'écartés aux poulies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false},
    {name: 'pompes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, imperor incididunt ut labore et dolore magna aliqua.',
      imagePath: 'assets/images/exercises/traction.jpg',
      series: 1, repetition: 1, weight: 0, restInner: 0, restOuter: 0, duration: 0, deletable: false}
    ]
  ];

  constructor() { }

  getAllExercises() {
    return this.exercises;
  }

  getExerciseById(idBody, idExercise) {
    return this.exercises[idBody][idExercise];
  }

  isExerciseDeletable(idBody, idExercise) {
    return this.exercises[idBody][idExercise].deletable;
  }

  addNewExercise(exercise) {
    this.exercises[exercise.body].push(new Exercise(exercise.name, exercise.description));
    // enregistrement sur la table firebase voir si besoin d'une id dans la base ??????(la j'utilise id du tableau)
  }

  updateExercise() {

  }

  deleteExercise(idBody, idExercise) {
    this.exercises[idBody].splice(idExercise, 1);
  }

  getAllBodys() {
    return this.bodys;
  }
}
