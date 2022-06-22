import { Component, OnInit } from '@angular/core';
import { AuthenticationStoreFacade } from '@mtg-live-life-counter/stores/authentication';

@Component({
  selector: 'mtg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _authenticationStoreFacade: AuthenticationStoreFacade
  ) {}

  public ngOnInit(): void {
    this._authenticationStoreFacade.loadAuthentication();
  }
}
