import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, Router } from '@angular/router';  // فقط RouterOutlet را وارد می‌کنید

@Component({
  selector: 'app-private-template',
  standalone: true,  // تنظیم standalone برای این کامپوننت
  imports: [RouterOutlet,RouterLink],  // RouterOutlet را به طور مستقیم وارد می‌کنید
  templateUrl: './private-template.html',
  styleUrls: ['./private-template.css']
})
export class PrivateTemplate {
  router=inject(Router);
logoff() {
sessionStorage.clear();
localStorage.removeItem('token');
this.router.navigateByUrl('/login');
}
}
