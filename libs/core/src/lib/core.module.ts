import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationStoreModule } from './stores/authentication';
import { API_URL } from './tokens';
import { AuthInterceptor } from './interceptors';
import { MustBeAuthenticatedGuard } from './guards';
import { RoomService, UserService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule, AuthenticationStoreModule],
  providers: [],
})
export class CoreModule {
  static forRoot({
    apiUrl,
  }: {
    apiUrl: string;
  }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_URL,
          useValue: apiUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },

        MustBeAuthenticatedGuard,

        UserService,
        RoomService,
      ],
    };
  }
}
