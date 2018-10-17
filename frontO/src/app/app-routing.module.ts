import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* component */
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesEditComponent } from './exercises/exercises-edit/exercises-edit.component';
import { TrainingEditComponent } from './training/training-edit/training-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/new', component: TrainingEditComponent },
  { path: 'training/edit', component: TrainingEditComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercises/new', component: ExercisesEditComponent },
  { path: 'exercises/edit/:idBody/:idExercise', component: ExercisesEditComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
