import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* component */
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
