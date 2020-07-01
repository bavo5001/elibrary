import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./components/auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { LazyAdminComponent } from "./admin/lazy-admin/lazy-admin.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {QrComponent} from "./components/qr/qr.component";
import {AuthGuard} from "./components/auth/auth.guard";
const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "login" },
  // { path: "admin", component: LazyAdminComponent },
  // { path: "auth", component: AuthComponent },
  // { path: "login", component: LoginComponent },
  // { path: "home", component: LayoutComponent},
  // { path: "home/qr", component: QrComponent},
  // { path: "**", component: PageNotFoundComponent}
  {
    path: "home", component: LayoutComponent,
    loadChildren: "./components/layout/home.module#HomeModule",
    canActivate: [AuthGuard]
  },
  {
    path: "", pathMatch:"full", redirectTo: "login"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "auth", component: AuthComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
