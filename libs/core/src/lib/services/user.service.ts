import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticateCommand, CreateUserCommand } from '../models/commands';
import { AuthenticateResponse, UserModel } from '../models';

@Injectable()
export class UserService {
  constructor(private readonly _httpClient: HttpClient) {}

  public user(): Observable<UserModel> {
    return this._httpClient
      .get<ResponseModel<UserModel>>(`user`)
      .pipe(map(({ data }) => data));
  }

  public authenticate(
    command: Partial<AuthenticateCommand>
  ): Observable<AuthenticateResponse> {
    return this._httpClient
      .post<ResponseModel<AuthenticateResponse>>(`user/authenticate`, command)
      .pipe(map(({ data }) => data));
  }

  public create(user: Partial<CreateUserCommand>): Observable<UserModel> {
    console.log('USER -> ', user);
    return this._httpClient.post<ResponseModel<UserModel>>(`user`, user).pipe(
      map(({ data }) => data),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }
}
