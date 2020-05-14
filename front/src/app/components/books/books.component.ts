import { Component, Inject, OnInit, ViewEncapsulation} from "@angular/core";
import {BooksApiService} from "./books-api.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";

export interface DataBooks {
  id: string,
  title: string,
  autors: string,
  description: string,
  imgURL: string,
}
export interface DialogData {
  book: string;
  name: string;
}
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
 public books: [] = [];

  constructor(private booksApiService: BooksApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.booksApiService.SearchGoogleBooks("javascript").subscribe();

  }
  googleBooks(s) {
    this.booksApiService
      .SearchGoogleBooks(s)
      .subscribe((data) => this.books = data.items);
  }

  // DIALOG WINDOW////////////////////////////////////////////////////////////////

  kniga: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(BooksDialogComponent, {
      width: '320px',
      data: {name: this.name, book: this.kniga}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.kniga = result;
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
