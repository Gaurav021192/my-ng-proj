import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in', style({
          transform: 'translateY(40px)'
        }))),
    ]),
    trigger('myAwesomeAnimation2', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ]
})
export class HeroComponent implements OnInit {

  myArr = ['him','hers','yours','theirs'];
  price = 123456;
  dateVal = new Date();
  jsonVal = { moo: 'foo', goo: { too: 'new' }};
  angularLogo = 'http://lorempixel.com/400/200/sports/';
  buttonStatus = true;
  promise: Promise<string>;
  observable: Observable<number>;
  titleClass = 'red-title';
  titleStyle = 'blue';
  titleClasses = {
    'red-title': true,
    'large-title': true
  }
  titleStyles = {
    'color': 'red',
    'font-size' : '4em'
  }
  person = {
    name : 'Gaurav Bisht',
    place : 'Nainital'
  }

  constructor(private dataService:DataService) {
      this.promise = this.getPromise();
      this.observable = this.getObservable();
  }

  someProperty:string = '';

ngOnInit() {
  console.log(this.dataService.cars);

  this.someProperty = this.dataService.myData();
}

state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
        alert('first');
  }

  animateMe2() {
        this.state = (this.state === 'small' ? 'large' : 'small');
        alert('Second');
  }

  myEvent(event) {
    console.log(event);
  }

  myDblClick() {
    alert('Test Me!!!!!');
  }

  getPromise() {
     return new Promise((resolve, reject) => {
       setTimeout(() => resolve("Promise complete!"), 3000);
     });
  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v*v)
  }

}
