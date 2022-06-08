import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../tokens';
import { ResponseModel } from '../models';
import { map, Observable } from 'rxjs';
import { AuthenticateCommand, CreateUserCommand } from '../models/commands';
import { AuthenticateResponse, UserModel } from '../models';

@Injectable()
export class UserService {
  constructor(
    @Inject(API_URL) private readonly _apiUrl: string,
    private readonly _httpClient: HttpClient
  ) {}

  public user(): Observable<UserModel> {
    return this._httpClient
      .get<ResponseModel<UserModel>>(`${this._apiUrl}/user`)
      .pipe(map(({ data }) => data));
  }

  public authenticate(
    command: AuthenticateCommand
  ): Observable<AuthenticateResponse> {
    return this._httpClient
      .post<ResponseModel<AuthenticateResponse>>(
        `${this._apiUrl}/user/authenticate`,
        command
      )
      .pipe(map(({ data }) => data));
  }

  public create(user: CreateUserCommand): Observable<UserModel> {
    return this._httpClient
      .post<ResponseModel<UserModel>>(`${this._apiUrl}/user`, user)
      .pipe(map(({ data }) => data));
  }
}
