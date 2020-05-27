import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QrComponent} from "../qr/qr.component";
import {BooksComponent} from "../books/books.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {DashboardComponent} from "../dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'qr', component: QrComponent},
  {path: 'books', component: BooksComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
