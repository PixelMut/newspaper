import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {NewsDetailComponent} from './mainpage/news-detail/news-detail.component';
import {PublisherspageComponent} from './publisherspage/publisherspage.component';
import {PublisherDetailComponent} from './publisherspage/publisher-detail/publisher-detail.component';
import {SavedArticlesComponent} from './saved-articles/saved-articles.component';


const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'detail', component: NewsDetailComponent },
  { path: 'publishers', component: PublisherspageComponent },
  { path: 'publisher-detail', component: PublisherDetailComponent },
  { path: 'saved', component: SavedArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
