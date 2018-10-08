import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../../exercise.model';

@Component({
  selector: 'app-exercises-item',
  templateUrl: './exercises-item.component.html',
  styleUrls: ['./exercises-item.component.scss']
})
export class ExercisesItemComponent implements OnInit {
  @Input() exercise: Exercise;
  @Input() indexExercise;
  @Input() indexBody;

  constructor() { }

  ngOnInit() {

  }

}
