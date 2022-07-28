import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/types';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup = new FormGroup([]);

  submited = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.submited = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.pass,
    };

    this.auth.login(user).subscribe(
      (res) => {
        this.form.reset();
        this.router.navigate(['/admin', 'dashboard']);
        this.submited = false;
      },
      () => {
        this.submited = false;
      }
    );
  }

  get pass() {
    return this.form.get('pass');
  }
  get email() {
    return this.form.get('email');
  }
}
