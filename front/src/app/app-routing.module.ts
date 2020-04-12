import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from "./components/login/login.component";
import {LazyAdminComponent} from "./admin/lazy-admin/lazy-admin.component";
import {BooksComponent} from "./components/books/books.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'admin', component: LazyAdminComponent},
  {path: 'books', component: BooksComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
