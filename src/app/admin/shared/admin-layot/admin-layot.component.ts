import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layot',
  templateUrl: './admin-layot.component.html',
  styleUrls: ['./admin-layot.component.scss'],
})
export class AdminLayotComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
