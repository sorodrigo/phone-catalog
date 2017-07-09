import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import JsonApiSerializer from 'jsonapi-serializer';
const Deserializer = new JsonApiSerializer.Deserializer({ keyForAttribute: 'camelCase' });

@Injectable()
export class PhonesService {
  private url = 'http://0.0.0.0:3000/api/phones';

  constructor(private http: Http) { }

  getPhones(): Promise<any[]> {
    return this.http.get(this.url)
      .map(this.deserialize)
      .catch(this.handleError)
      .toPromise();
  }

  private deserialize(res: Response) {
    const data = res.json();
    return Deserializer.deserialize(data);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
