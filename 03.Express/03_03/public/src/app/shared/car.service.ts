import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero.model";

@Injectable()
export class CarSerice {
    constructor(private http: Http){
    }
    getCars(): Observable<Hero[]> {
        return this.http.get('/heroes')
            .map(res => res.json());
    }
    getCarsWithPromise(): Promise<Hero> {
        return this.http.get('/heroes')
            .toPromise()
            .then(res => res.json());
    }

    getNewHero(): Observable<Hero> {
        return this.http.post('/heroes', {key: 'myKey'})
            .map(res => res.json());
    }
}