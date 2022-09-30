import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService 
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if (this.authService.isLoggedInGuard) {
        console.log('Access Granted ..');
        return true;
      }
      else {
        this.toastr.warning('You dont have permission to access this page ..');
        this.router.navigate(['/login']);
        return false;
      }

  }
  
}
