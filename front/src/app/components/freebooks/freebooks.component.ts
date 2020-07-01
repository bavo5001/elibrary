import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksApiService} from "../books/books-api.service";

@Component({
  selector: 'app-freebooks',
  templateUrl: './freebooks.component.html',
  styleUrls: ['./freebooks.component.css']
})
export class FreebooksComponent implements OnInit, OnDestroy {
  freebooks: [] = [];
  constructor(private booksApiService: BooksApiService) { }

  FreebasesSearch(sea) {
    this.booksApiService.SearchOpenLibrary(sea).subscribe((data) => {
      this.freebooks = data.items;
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
