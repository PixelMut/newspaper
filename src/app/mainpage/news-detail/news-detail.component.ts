import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../providers/helper.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  currentArticle;

  constructor(private helperService: HelperService) {
    this.getArticleFromStorage();
  }

  ngOnInit() {
  }

  getArticleFromStorage(){
    const result = JSON.parse(localStorage.getItem('currentArticle'));
    if(result !== null){
      this.currentArticle = result;
    }
  }

  async onSaveArticle(article) {
    this.helperService.saveArticle(article);
  }
}
