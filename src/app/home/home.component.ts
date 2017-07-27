import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title: String;

  ngOnInit() {
    this.title = 'Home Title';
  }

  ngAfterViewInit() {
    // fix menu when passed
  }
}
