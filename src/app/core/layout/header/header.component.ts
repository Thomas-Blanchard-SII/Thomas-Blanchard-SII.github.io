import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

interface Locale {
  localeCode: string;
  label: string;
}

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  locales: Locale[] = [
    { localeCode: 'en', label: 'EN' },
    { localeCode: 'fr', label: 'FR' },
  ];

  href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
  }

  currentLocale = this.locales[1];

  logo = 'header-logo.svg';
  logoText = 'header-logo-text.svg';
  photo = 'header-photo.png';

}
