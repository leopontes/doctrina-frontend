import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    formBuilder: FormBuilder
  ){
    this.formLogin = formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    this.loading = true;
    this.authService.login(this.formLogin.value.username, this.formLogin.value.password)
      .subscribe(data => {
        this.router.navigate(['main', 'dashboard']);
      })
  }
}
