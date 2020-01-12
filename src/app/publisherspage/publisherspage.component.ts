import { Component, OnInit } from '@angular/core';
import {PUBLISHERS} from '../providers/mock-publishers';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-publisherspage',
  templateUrl: './publisherspage.component.html',
  styleUrls: ['./publisherspage.component.css']
})
export class PublisherspageComponent implements OnInit {
  publishers = PUBLISHERS;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.publishers)
  }

  onViewPublisher(publisher){

    const navigationExtras: NavigationExtras = {
      queryParams : {
        code : publisher.id,
        name : publisher.name
      }
    };
    // await localStorage.setItem('currentPublisher', JSON.stringify(publisher));
    this.router.navigate(['/publisher-detail'], navigationExtras);
  }
}
