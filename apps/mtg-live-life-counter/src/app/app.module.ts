import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from '@mtg-live-life-counter/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    CoreModule.forRoot({ apiUrl: environment.apiUrl }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
