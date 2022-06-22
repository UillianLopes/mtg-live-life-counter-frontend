import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { API_ENDPOINT, SIGNAL_R_ENDPOINT } from './tokens';

import { RoomService, UserService } from './services';
import { UrlInterceptor } from './interceptors';

@NgModule({
  imports: [CommonModule],
  providers: [],
})
export class CoreModule {
  static forRoot({
    apiEndpoint,
    signalREndpoint,
  }: {
    signalREndpoint: string;
    apiEndpoint: string;
  }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_ENDPOINT,
          useValue: apiEndpoint,
        },
        {
          provide: SIGNAL_R_ENDPOINT,
          useValue: signalREndpoint,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: UrlInterceptor,
          multi: true,
        },
        UserService,
        RoomService,
      ],
    };
  }
}
