import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {NewsApiService} from '../providers/news-api.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {COUNTRIES} from '../providers/mock-countries';
import {CATEGORIES} from '../providers/mock-categories';
import {MatSnackBar} from '@angular/material';
import {HelperService} from '../providers/helper.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, OnChanges {

  articleList: any[] // = this.newsApiService.getTopHeadlines('fr');
  isLoading = true;
  countries = COUNTRIES;
  selectedCountry = COUNTRIES[72];
  categories = CATEGORIES;
  selectedCategory = CATEGORIES[0];

  constructor(private newsApiService: NewsApiService,
              private route: ActivatedRoute,
              private snackbar : MatSnackBar,
              private router : Router,
              private helperService: HelperService) {
    this.getTopHeadlines(this.selectedCountry.code, this.selectedCategory.id);
  }

  ngOnInit() {
    // this.route.queryParams
    //   .subscribe((data) => {
    //    console.log(data)
    //   });
    // this.snackbar.open('hello', '', {
    //   duration: 2000,
    // });
  }

  ngOnChanges(changes: SimpleChanges){
      console.log('CHANGES'+changes);
  }

  changeLanguage(){
    this.isLoading = true;
    this.getTopHeadlines(this.selectedCountry.code, this.selectedCategory.id);
  }

  changeCategory(){
    this.isLoading = true;
    this.getTopHeadlines(this.selectedCountry.code, this.selectedCategory.id);
  }

  getTopHeadlines(countryCode: string, categoryCode: string){
    this.newsApiService.getTopHeadlines(countryCode, categoryCode).subscribe(
      (result: any) => {
        console.log(result);
        this.articleList = result.articles;
        this.isLoading = false;
        },
      (error) => {
        console.log(error);
        this.snackbar.open(error.error.message, '', {
          duration: 2000,
        });
        this.isLoading = false;
      }
    );
  }

  async onViewArticle(article){
    await localStorage.setItem('currentArticle', JSON.stringify(article));
    this.router.navigate(['/detail']);
  }

  async onSaveArticle(article){
    this.helperService.saveArticle(article)


    // const result = await JSON.parse(localStorage.getItem('savedArticles'));
    // console.log(result);
    // if (result !== null && result.length !== 0){ // deja des articles en FAV
    //   console.log(result.filter(articles => articles.url === article.url));
    //   if(result.filter(articles => articles.url === article.url).length !== 0){
    //     this.snackbar.open('Already in your Favs', '', {
    //       duration: 2000,
    //     });
    //   }else{
    //     result.push(article);
    //     await localStorage.setItem('savedArticles', JSON.stringify(result));
    //     this.snackbar.open('Article Saved', '', {
    //       duration: 2000,
    //     });
    //   }
    //
    // } else { // aucun article en FAV
    //   await localStorage.setItem('savedArticles', JSON.stringify([article]));
    //   this.snackbar.open('Article Saved', '', {
    //     duration: 2000,
    //   });
    // }


  }
}
