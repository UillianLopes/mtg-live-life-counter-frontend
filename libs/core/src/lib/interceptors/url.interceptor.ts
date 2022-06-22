import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../tokens';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(@Inject(API_ENDPOINT) private readonly _apiUrl: string) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${this._apiUrl}${req.url}`,
    });
    console.log(req);
    return next.handle(req);
  }
}
