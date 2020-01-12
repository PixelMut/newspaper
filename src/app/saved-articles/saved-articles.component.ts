import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-saved-articles',
  templateUrl: './saved-articles.component.html',
  styleUrls: ['./saved-articles.component.css']
})
export class SavedArticlesComponent implements OnInit {
  articleList = [];
  isLoading = true;

  constructor(private router: Router,
              private snackbar: MatSnackBar) {
    this.getArticles();
  }

  ngOnInit() {
  }

  async getArticles(){
    const result = await JSON.parse(localStorage.getItem('savedArticles'));
    if (result !== null){
      this.articleList = result;
      console.log(this.articleList);
    }
    this.isLoading = false;
    console.log(this.articleList.length)
  }

  async onViewArticle(article){
    await localStorage.setItem('currentArticle', JSON.stringify(article));
    this.router.navigate(['/detail']);
  }

  onRemoveArticle(articleUrl){
    localStorage.setItem('savedArticles', JSON.stringify(this.articleList.filter(articles=> articles.url !== articleUrl)));
    this.getArticles();
    this.snackbar.open('Article Removed', '', {
      duration: 2000,
    });
  }

}
