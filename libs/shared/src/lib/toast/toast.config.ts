import { InjectionToken } from '@angular/core';
import { Color } from '../@types';

export const TOAST_CONFIG = new InjectionToken('toastConfig');

export interface ToastConfig {
  title?: string;
  message: string;
  color: Color;
}
