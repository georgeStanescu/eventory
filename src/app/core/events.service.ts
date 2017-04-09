import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventsService {

  constructor(private http: Http) {}

    getCarsLarge() {
        return this.http.get('./assets/test-data/events.json')
          .toPromise()
          .then(res => <Car[]> res.json().data)
          .then(data => { return data; });
    }

}
