import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      this.firebaseSvc.getAuth().onAuthStateChanged((auth) => {
        if (auth) {
          this.firebaseSvc
            .getUserTipoUsuario(auth.uid)
            .subscribe((tipoUsuario) => {
              if (tipoUsuario === 'alumno') {
                resolve(true); // Usuario autenticado y es un alumno, permite el acceso a la página de inicio
              } else {
                this.utilsSvc.routerLink('/profesor'); // Usuario autenticado pero no es un alumno, redirige a la página de profesor
                resolve(false);
              }
            });
        } else {
          resolve(true); // No autenticado, permite el acceso a la página de inicio
        }
      });
    });
  }
}
