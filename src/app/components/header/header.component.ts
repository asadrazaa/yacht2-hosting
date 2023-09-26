import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() isWhite = false;
  
  toggleMenu() {
    const btn = document.getElementById('navbarNav');
    btn?.classList.toggle('show');
  }
}
