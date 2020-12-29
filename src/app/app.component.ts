import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Month } from './entity/month';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'promotor';
  server = 'http://localhost:8080/';
  months: Month[];
  search: string;
  currentElement: number;

  dataSource: MatTableDataSource<Month>;
  dispColumns = ['id', 'name'];

  constructor(private http: HttpClient) {
    this.currentElement = -1;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.http.get<Month[]>(this.server).subscribe(result => {
      this.dataSource = new MatTableDataSource<Month>(result);
    });
  }

  // tslint:disable-next-line:typedef
  submit(form: NgForm) {
    this.http.get<Month[]>(this.server + '?q=' + this.search)
      .subscribe(result => this.dataSource.data = result);
  }

  // tslint:disable-next-line:typedef
  create(form: NgForm) {
    this.http.post<Month[]>(this.server, new Month(0, this.search))
      .subscribe(result => this.dataSource.data = result);
  }

  // tslint:disable-next-line:typedef
  edit(form: NgForm) {
    this.http.put<Month[]>(this.server, new Month(this.currentElement, this.search))
      .subscribe(result => this.dataSource.data = result);
  }

  // tslint:disable-next-line:typedef
  remove(form: NgForm) {
    this.http.delete(this.server + '?id=' + this.currentElement).subscribe(result => this.ngOnInit());
  }

  // tslint:disable-next-line:typedef
  onClick(element) {
    if (this.currentElement === -1) {
      this.currentElement = element.id;

    }else if (this.currentElement === element.id) {
      this.currentElement = -1;
    } else {
      this.currentElement = element.id;
    }
  }
}
