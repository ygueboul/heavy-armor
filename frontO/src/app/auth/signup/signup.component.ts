import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // bdd = 'email'; si le eail et disponible
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(signupForm) {
    console.log(signupForm);
    // condition si le compte est cree peut etre avec le eamil et le mot de passe deja presremplis
    this.router.navigate(['/login']);
    // sinon email existe deja ou mot de passe ou autre probleme
  }

}
