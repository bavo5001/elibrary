import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { BooksApiService } from "./books-api.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements AfterViewInit {
  books$;

  constructor(private booksApiService: BooksApiService) {}

  ngAfterViewInit(): void {
    this.booksApiService.SearchGoogleBooks("javascript").subscribe();
  }

  googleBooks(s) {
    this.booksApiService
      .SearchGoogleBooks(s)
      .subscribe((book) => (this.books$ = book));
  }
}
