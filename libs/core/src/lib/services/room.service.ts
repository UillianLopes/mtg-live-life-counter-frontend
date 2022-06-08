import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../tokens';


@Injectable()
export class RoomService {
  constructor(
    @Inject(API_URL) private readonly _apiUrl: string,
    private readonly _httpClient: HttpClient
  ) {}
}
