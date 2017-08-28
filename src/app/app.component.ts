import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'app';
  myArr = ['him','hers','yours','theirs'];
  angularLogo = 'http://lorempixel.com/400/200/sports/';
  buttonStatus = true;
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

  constructor(private dataService:DataService) {

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
}
