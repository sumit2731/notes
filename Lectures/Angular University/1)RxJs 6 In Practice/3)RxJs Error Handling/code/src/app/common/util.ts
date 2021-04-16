import { Observable } from 'rxjs';

export function createHttpObservable(url: string) {
  return Observable.create(observer => {

    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, {signal})
      .then(response => {
        console.log('first then block');
        if (response.ok) {
          console.log('Inisde if block of promise');
          return response.json();
        } else {
          console.log('inisde else block of promise');
          observer.error(`Request failed with status code: ${response.status}` );
        }
      })
      .then(body => {
        console.log('second then block');
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        console.log('control is in catch block of observable');
        observer.error(err);
      });
      return () => controller.abort();
  });
}

