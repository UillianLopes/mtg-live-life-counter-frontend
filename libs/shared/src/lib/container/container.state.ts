import { ComponentStore } from '@ngrx/component-store';

export interface ContainerState {
  isLoading: boolean;
  fluid: boolean;
}
export class ContainerStore extends ComponentStore<ContainerState> {
  public readonly isLoading$ = this.select(({ isLoading }) => isLoading);
  public readonly fluid$ = this.select(({ fluid }) => fluid);

  constructor() {
    super({ isLoading: false, fluid: false });
  }

  public readonly setIsLoading = this.updater((state, isLoading: boolean) => ({
    ...state,
    isLoading,
  }));

  public readonly setFluid = this.updater((state, fluid: boolean) => ({
    ...state,
    fluid,
  }));
}
