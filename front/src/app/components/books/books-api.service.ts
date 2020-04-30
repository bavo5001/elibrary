import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  url: string = `https://www.googleapis.com/books/v1/volumes?q=`;
  key: string = `${environment.apiKey}`;
  constructor(private http: HttpClient) {
    this.http = http;
  }

  SearchGoogleBooks(SearchInput) : Observable<any> {
    const encodedURI  = encodeURI(`${this.url}${SearchInput}&key=${environment.apiKey}&maxResults=3`)
    return this.http.get(encodedURI);
  }
}
