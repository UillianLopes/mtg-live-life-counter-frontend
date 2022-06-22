import { Observable } from 'rxjs';

export function loadJsonFromLocalStorage$<T>(key: string): Observable<T> {
  return new Observable<T>((observer) => {
    try {
      const json = localStorage.getItem(key);

      if (typeof json !== 'string')
        observer.next(undefined);
      else observer.next(JSON.parse(json));
    } catch (error) {
      observer.error(error);
    } finally {
      observer.complete();
    }
  });
}
