import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Locale {
  localeCode: string;
  label: string;
}

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  locales: Locale[] = [
    { localeCode: 'en', label: 'English' },
    { localeCode: 'fr', label: 'Français' },
  ];
}
