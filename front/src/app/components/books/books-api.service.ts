import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BooksApiService {
  url: string = `https://www.googleapis.com/books/v1/volumes?q=`;
  freeURL: string = 'https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback';
  key: string = `${environment.apiKey}`;
  constructor(private http: HttpClient) {
    this.http = http;
  }
  SearchOpenLibrary(SearchInput) {
    const encodedURI = encodeURI('https://openlibrary.org/api/books?bibkeys=ISBN:'+SearchInput);
    return this.http.get(encodedURI).pipe(map((res: any) => res));
  }
  SearchGoogleBooks(SearchInput) {
    const encodedURI = encodeURI(
      `${this.url}${SearchInput}&key=${environment.apiKey}`
    );
    return this.http.get(encodedURI).pipe(map((response: any) => response));
  }
}
