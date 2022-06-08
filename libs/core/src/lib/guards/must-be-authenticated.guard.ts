import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationStoreFacade } from '../stores/authentication';

@Injectable()
export class MustBeAuthenticatedGuard implements CanActivate {
  constructor(
    private readonly _authenticationStoreFacade: AuthenticationStoreFacade,
    private readonly _router: Router
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this._authenticationStoreFacade.isAuthenticating$.pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return isAuthenticated;
        }

        return this._router.createUrlTree(['/login']);
      })
    );
  }
}
