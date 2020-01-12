import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()

// @Injectable({
//   providedIn: 'root'
// })

export class NewsApiService {

  baseUrl: string = environment.NewsAPIUrl;
  apiKey: string = environment.NewsAPIKey;

  constructor(private http: HttpClient) { }

  getTopHeadlines(countrycode: string, categoryId: string){
    let url = `${this.baseUrl}/top-headlines?apiKey=${this.apiKey}&country=${countrycode}`;
    if(categoryId !== 'all'){
      url = `${url}&category=${categoryId}`;
    }
    return this.http.get(url);
  }

  getPublisherTopHeadlines(publishercode: string){
    return this.http.get(`${this.baseUrl}/top-headlines?apiKey=${this.apiKey}&sources=${publishercode}`);
  }
}
