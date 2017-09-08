import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public minDate: Date;

  public ngOnInit(): void {
    const today = new Date();
    this.minDate = today;
  }

  constructor() {
  }
}
