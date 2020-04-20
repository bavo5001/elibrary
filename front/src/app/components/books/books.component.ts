import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {BooksApiService} from "./books-api.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books$: Observable<Array<any>>;
  ngOnInit(): void {
   this.books$ = this.booksApiService.SearchGoogleBooks('javascript');
  }

  constructor(private booksApiService: BooksApiService) { }
  googleBooks(s) {
    this.books$ = this.booksApiService.SearchGoogleBooks(s);
  }
  }
