import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
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
    return this.http.get(`${this.url}${SearchInput}&key=${environment.apiKey}`)
      .pipe(map((response: Response) => response.json));
  }
}
