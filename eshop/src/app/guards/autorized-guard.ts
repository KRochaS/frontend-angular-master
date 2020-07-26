import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityUtil } from '../utils/security.util';


@Injectable({
  providedIn: 'root'
})
export class AutorizedGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
      const user = SecurityUtil.get();
      if(!user || !user.token) {
          this.router.navigate(['/login']);
          return false;
      }

      return true;
  }
}
