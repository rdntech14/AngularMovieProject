import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RootObjectResponse } from './entities/RootObjectResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  data:any;
  apiKey: string = '<enter api key>';
  hostUrl: string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;

  popularUrlQuery: string = '&language=en-US&page=1&vote_average.gte=6&primary_release_date.gte=2019-01-01';
  animatedUrlQuery: string = '&language=en-US&page=1&with_genres=16&vote_average.gte=6&primary_release_date.gte=2019-01-01';
  documentaryUrlQuery: string = '&language=en-US&page=1&with_genres=99&vote_average.gte=6&primary_release_date.gte=2019-01-01';

  popularMovieURL: string = `${this.hostUrl}${this.popularUrlQuery}`;
  animatedMovieURL: string = `${this.hostUrl}${this.animatedUrlQuery}`;
  documentaryMovieURL: string = `${this.hostUrl}${this.documentaryUrlQuery}`;

  constructor(private http: HttpClient) { }

  getPopularMovieList(): Observable<RootObjectResponse> {
    return this.http.get<RootObjectResponse>(this.popularMovieURL)
  }

  getAnimatedMovieList(): Observable<RootObjectResponse> {
    return this.http.get<RootObjectResponse>(this.animatedMovieURL)
  }

  getDocumentaryMovieList(): Observable<RootObjectResponse> {
    return this.http.get<RootObjectResponse>(this.documentaryMovieURL)
  }

}