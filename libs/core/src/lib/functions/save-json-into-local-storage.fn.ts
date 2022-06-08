import { Observable } from 'rxjs';

export function saveJsonIntoLocalStorage$<T>(key: string, value: T) {
  return new Observable<void>((observer) => {
    localStorage.setItem(key, JSON.stringify(value));
    observer.next();
    observer.complete();
  });
}
