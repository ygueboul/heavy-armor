import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* material module */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
/* routing module */
import { AppRoutingModule } from './app-routing.module';
/* component */
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TrainingComponent } from './training/training.component';
import { TrainingListComponent } from './training/training-list/training-list.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesListComponent } from './exercises/exercises-list/exercises-list.component';
import { ExercisesItemComponent } from './exercises/exercises-list/exercises-item/exercises-item.component';
import { ExercisesEditComponent } from './exercises/exercises-edit/exercises-edit.component';
import { TrainingEditComponent } from './training/training-edit/training-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TrainingComponent,
    TrainingListComponent,
    ExercisesComponent,
    ExercisesListComponent,
    ExercisesItemComponent,
    ExercisesEditComponent,
    TrainingEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
