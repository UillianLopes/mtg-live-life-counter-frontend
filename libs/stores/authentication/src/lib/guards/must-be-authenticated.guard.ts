import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthenticationStoreFacade } from '../+state/authentication-store.facade';

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
    return this._authenticationStoreFacade.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          return isAuthenticated;
        }

        return this._router.createUrlTree(['/login']);
      })
    );
  }
}
