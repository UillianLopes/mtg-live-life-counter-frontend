import { Observable } from 'rxjs';

export function saveJsonIntoLocalStorage$<T>(key: string, value: T) {
  return new Observable<void>((observer) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      observer.next();
    } catch (error) {
      observer.error(error);
    } finally {
      observer.complete();
    }
  });
}
