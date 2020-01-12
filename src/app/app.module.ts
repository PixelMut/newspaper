import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatDividerModule,
  MatIconModule, MatLabel,
  MatMenuModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { MainpageComponent } from './mainpage/mainpage.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsApiService} from './providers/news-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsDetailComponent } from './mainpage/news-detail/news-detail.component';
import { PublisherspageComponent } from './publisherspage/publisherspage.component';
import { PublisherDetailComponent } from './publisherspage/publisher-detail/publisher-detail.component';
import { SavedArticlesComponent } from './saved-articles/saved-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NewsDetailComponent,
    PublisherspageComponent,
    PublisherDetailComponent,
    SavedArticlesComponent,
    // PreferencesDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    NewsApiService
  ],
  bootstrap: [AppComponent],
  entryComponents : []
})
export class AppModule { }
