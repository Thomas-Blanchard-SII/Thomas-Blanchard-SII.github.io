import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { LOCALE_ID, Inject } from '@angular/core';

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

  
  constructor(
    @Inject(LOCALE_ID) public locale: string
  ){}

  currentLocale = this.locale;

  logo = 'header-logo.svg';
  logoText = 'header-logo-text.svg';
  photo = 'header-photo.png';

}
