import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Player} from './player';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayersService {

  constructor (private http: Http) {}
    // need to call backend to grab data from mongo...
    savePlayer(player:Player) {
      
    }
    getData (): Promise<any> {
       // return this.http.get('http://localhost:5005/players').map((res:Response) => res.json());
        return this.http.get('http://localhost:5005/players').toPromise().then(this.extractData).catch(this.handleError);
    }



}
