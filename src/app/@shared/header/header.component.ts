import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  @Input() sidenav!: MatSidenav;
  actionButtons = [
    { title: 'Neighborly New', icon: '/assets/six.png' },
    { title: 'Directory', icon: '/assets/seven.png' },
    { title: 'Ask a Pro', icon: '/assets/five.png' },
    { title: 'Jobs', icon: '/assets/five.png' },
    { title: 'Biz for Sale', icon: '/assets/four.png' },
    { title: 'Fund Me', icon: '/assets/three.png' },
    { title: 'Deals', icon: '/assets/two.png' },
  ];


  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {}



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
