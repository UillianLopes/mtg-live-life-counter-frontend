import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color } from '../@types';
import { Size } from '../@types/size.type';
import { ButtonAppearance } from './button-appearance.type';
import { ButtonStore } from './button.state';

@Component({
  selector: 'button[mtg-button],button[mtg-outline-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [ButtonStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'btn mtg-button',
  },
})
export class ButtonComponent {
  @Input()
  set appearance(appearance: ButtonAppearance) {
    this._store.setAppearance(appearance);
  }

  @Input()
  set size(size: Size) {
    this._store.setSize(size);
  }

  @Input()
  set color(color: Color) {
    this._store.setColor(color);
  }

  @Input()
  set isLoading(isLoading: boolean) {
    this._store.setIsLoading(isLoading);
  }

  public readonly isLoading$ = this._store.isLoading$;
  public readonly class$ = this._store.class$;

  constructor(private readonly _store: ButtonStore) {}

  public onClick(): void {}
}
