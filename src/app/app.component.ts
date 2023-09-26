import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yacht';
  isWhite = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;  
        this.isWhite = false;        
        if(this.currentRoute !== '/dashboard') {
          this.isWhite = true;
        }
      }
    });
  }

  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 30 ? (this.isWhite = true) : (this.isWhite = false);
  }
}
