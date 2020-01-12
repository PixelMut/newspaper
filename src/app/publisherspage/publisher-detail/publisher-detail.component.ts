import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsApiService} from '../../providers/news-api.service';
import {MatSnackBar} from '@angular/material';
import {HelperService} from '../../providers/helper.service';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styleUrls: ['./publisher-detail.component.css']
})
export class PublisherDetailComponent implements OnInit {
  // currentPublisher;
  isLoading = true;
  articleList;

  constructor(private route: ActivatedRoute,
              private newsApiService: NewsApiService,
              private snackbar : MatSnackBar,
              private router: Router,
              private helperService: HelperService) {
    // this.getPublisherFromStorage();
    this.route.queryParams.subscribe(
      (result) => {
        if(result.code){
          this.getPublisherTopHeadlines(result.code);
        }
      }
    );
  }

  ngOnInit() {
  }

  getPublisherTopHeadlines(publisherCode){
    this.newsApiService.getPublisherTopHeadlines(publisherCode).subscribe(
      (result:any) => {
        console.log(result);
        this.articleList = result.articles;
        this.isLoading = false;

      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.snackbar.open(error.error.message, '', {
          duration: 2000,
        });
      }
    );
  }

  async onViewArticle(article){
    await localStorage.setItem('currentArticle', JSON.stringify(article));
    this.router.navigate(['/detail']);
  }


  async onSaveArticle(article) {
    this.helperService.saveArticle(article);
  }

}
