import { Observable } from 'rxjs';

export function loadJsonFromLocalStorage$<T>(key: string): Observable<T> {
  return new Observable<T>((observer) => {
    const json = localStorage.getItem(key);

    if (typeof json !== 'string') {
      observer.error('No data found in local storage');
      observer.complete();
      return;
    }

    observer.next(JSON.parse(json));
    observer.complete();
  });
}
