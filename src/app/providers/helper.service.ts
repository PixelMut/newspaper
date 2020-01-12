import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  constructor(private snackbar: MatSnackBar) { }

  async saveArticle(article){
    const result = await JSON.parse(localStorage.getItem('savedArticles'));
    console.log(result);
    if (result !== null && result.length !== 0){ // deja des articles en FAV
      if(result.filter(articles => articles.url === article.url).length !== 0){
        this.snackbar.open('Already in your Favs', '', {
          duration: 2000,
        });
      }else{
        result.push(article);
        await localStorage.setItem('savedArticles', JSON.stringify(result));
        this.snackbar.open('Article Saved', '', {
          duration: 2000,
        });
      }
    } else { // aucun article en FAV
      await localStorage.setItem('savedArticles', JSON.stringify([article]));
      this.snackbar.open('Article Saved', '', {
        duration: 2000,
      });
    }
  }
}
