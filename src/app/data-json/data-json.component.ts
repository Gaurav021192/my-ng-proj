import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-json',
  templateUrl: './data-json.component.html',
  styleUrls: ['./data-json.component.css']
})
export class DataJsonComponent implements OnInit {

  private apiURL = 'https://address-book-demo.herokuapp.com/api/contacts';
  private jsonURL = './assets/json-data/pages.json';
  data: any = {};
  isCollapsed = false;
  public groups: Object[];
  public lessons:boolean;
  constructor(private http: Http) {
    console.log('Hello');
    this.getContacts();
    this.getData();
   }

  ngOnInit() {
    this.http.get(this.jsonURL).map((response: Response) => response.json() as Object[])
            .subscribe((data: Object[]) => {
            this.groups = data;
        });
  }

  getData() {
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json());
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

}
