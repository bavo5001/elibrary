import {AfterViewInit, Component, Inject, OnInit} from "@angular/core";
import { BooksApiService } from "./books-api.service";
import { Observable, throwError } from "rxjs";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
export interface DialogData {
  book: string;
  name: string;
}
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements AfterViewInit {
  books$;

  constructor(private booksApiService: BooksApiService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.booksApiService.SearchGoogleBooks("javascript").subscribe();
  }

  googleBooks(s) {
    this.booksApiService
      .SearchGoogleBooks(s)
      .subscribe((boo) => (this.books$ = boo));
  }
  // DIALOG WINDOW////////////////////////////////////////////////////////////////

  book: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(BooksDialogComponent, {
      width: '320px',
      data: {name: this.name, book: this.book}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.book = result;
    });
  }
}
@Component({
  selector: 'books-dialog',
  templateUrl: 'books-dialog.component.html',
})
export class BooksDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BooksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
