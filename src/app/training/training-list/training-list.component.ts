import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {
  trainings;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainings = this.trainingService.getAllTrinings();
    console.log(this.trainings);
  }

}
