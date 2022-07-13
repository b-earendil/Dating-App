import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  // this subscribe() method has been deprecated and may produce warnings
  // get weatherforecast basketball players from dapper-demo test-service
  // getUsers() {
  //   this.http.get('http://localhost:5000/weatherforecast').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  // this subscribe() method has been deprecated and may produce warnings
  // get api/users, dating app project
  //     getUsers() {
  //     this.http.get('https://localhost:5003/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  // non-deprecated observer pattern for subscribe method
  getUsers() {
    this.http.get('https://localhost:5003/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}
