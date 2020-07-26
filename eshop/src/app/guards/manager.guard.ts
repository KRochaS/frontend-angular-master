import { CanActivate, Router } from '@angular/router';
import { SecurityUtil } from '../utils/security.util';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

  constructor() { }

  canActivate() {
     return SecurityUtil.isInRole('manager');
  }
}