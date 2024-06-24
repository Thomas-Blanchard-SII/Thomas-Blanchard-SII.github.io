import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

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

  logo = 'header-logo.svg';
  logoText = 'header-logo-text.svg';
  photo = 'header-photo.png';

}
