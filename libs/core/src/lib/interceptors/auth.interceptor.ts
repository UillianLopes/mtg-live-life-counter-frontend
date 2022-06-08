import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { AuthenticationStoreFacade } from '../stores/authentication';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly _authenticationStoreFacade: AuthenticationStoreFacade
  ) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this._authenticationStoreFacade.authentication$.pipe(
      take(1),
      switchMap((authentication) => {
        if (!authentication) {
          return next.handle(req);
        }

        return next.handle(
          req.clone({
            setHeaders: {
              Authorization: `Bearer ${authentication.token}`,
            },
          })
        );
      })
    );
  }
}
