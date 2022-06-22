import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from '../tokens';


@Injectable()
export class RoomService {
  constructor(
    @Inject(API_ENDPOINT) private readonly _apiUrl: string,
    private readonly _httpClient: HttpClient
  ) {}
}
