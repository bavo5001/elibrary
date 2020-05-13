import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { LazyAdminComponent } from "./admin/lazy-admin/lazy-admin.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LayoutComponent} from "./components/layout/layout.component";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "admin", component: LazyAdminComponent },
  { path: "auth", component: AuthComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: LayoutComponent},
  { path: "**", component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
