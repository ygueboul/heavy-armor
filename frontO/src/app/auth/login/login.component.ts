import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // motDePasse = 'null'; mot de passe du email

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(loginForm) {
    console.log(loginForm);
    // si motDePasse == loginForm.password
    // et token pour autoriser l'affichage des page
    this.authService.token = 'token';
    this.router.navigate(['/training']);
    // sinon renvoi erreur dans le formulaire de connexion
  }

}
