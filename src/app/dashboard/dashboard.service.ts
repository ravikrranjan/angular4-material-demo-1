import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {

    private getInvertersUrl = 'https://jsonblob.com/api/jsonBlob/f03213cc-3842-11e7-ae4c-bd15bb9b1ec5';  // URL to inverters api
    constructor(private http: Http) { }

    getInverters(): Observable<any[]> {
        return this.http.get(this.getInvertersUrl)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.json().error || 'Server error');
    }
}
