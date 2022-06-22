import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from '@mtg-live-life-counter/core';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from '@mtg-live-life-counter/shared';
import { AuthenticationStoreModule } from '@mtg-live-life-counter/stores/authentication';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    CoreModule.forRoot({
      apiEndpoint: environment.apiEndpoint,
      signalREndpoint: environment.signalREndpoint,
    }),
    ToastModule.forRoot(),
    AuthenticationStoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
