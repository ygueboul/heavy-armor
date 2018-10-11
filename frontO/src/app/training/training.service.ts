import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  trainings: String[] = [
    'debutant',
    'haut',
    'bas'
  ];

  constructor() { }

  getAllTrinings () {
    return this.trainings;
  }
}
