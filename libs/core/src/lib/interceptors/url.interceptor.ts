import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../tokens';


@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(@Inject(API_URL) private readonly _apiUrl: string) {}
  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        url: `${this._apiUrl}${req.url}`,
      })
    );
  }
}
