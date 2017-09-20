import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MarvelService {

  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=548da005e998f336a1e25e35e76b8d94&hash=5715dce6f641aa0279eb8b5f2111ec85&limit=50";

  constructor(private http: Http) { }

  getCharacters(searchTerm: string): Observable<any> {

    let url = this.baseUrl;

    if(searchTerm){
      url = this.baseUrl + "&nameStartsWith=" + searchTerm;
    }

    return this.http.get(url)
      .map(result => {
        return result.json()
      })

  }
}

