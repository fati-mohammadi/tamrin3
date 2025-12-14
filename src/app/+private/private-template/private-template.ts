import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-private-template',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-template.html',
  styleUrls: ['./private-template.css']
})
export class PrivateTemplate {
  router = inject(Router);
  logoff() {
    sessionStorage.clear();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
