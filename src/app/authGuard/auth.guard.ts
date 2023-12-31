import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: DoctorPatientService, private router: Router, private toast: ToastrService) { }
  canActivate() {
    if (this.service.isLoggedIn())
      return true;
    else {
      this.toast.error('Error', 'Please Login first');
      this.router.navigate(['home/login']);
      return false;


    }
  }

}
