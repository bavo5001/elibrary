import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "./components/auth/auth.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LazyAdminModule } from "./admin/lazy-admin/lazy-admin.module";

import { AppComponent } from "./app.component";
import { SignaturePadModule } from "angular2-signaturepad";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from "./components/login/login.component";
import {BooksComponent, BooksDialogComponent} from "./components/books/books.component";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxSpinnerModule } from "ngx-spinner";
import { BooksApiService } from "./components/books/books-api.service";
import { MatCardModule } from "@angular/material/card";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { LayoutModule } from '@angular/cdk/layout';
import { QrComponent } from './components/qr/qr.component';
import { HomeModule } from './components/layout/home.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {NgQrScannerModule} from "angular2-qrscanner";
import { ZXingScannerModule} from "@zxing/ngx-scanner";
import { FeatureComponent } from './components/feature/feature.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, LoginComponent, BooksComponent, BooksDialogComponent, LayoutComponent, PageNotFoundComponent, QrComponent, DashboardComponent, FeatureComponent, ProfileComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    LazyAdminModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    HomeModule,
    MatGridListModule,
    MatMenuModule,
    NgQrScannerModule,
    ZXingScannerModule
  ],
  providers: [BooksApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
